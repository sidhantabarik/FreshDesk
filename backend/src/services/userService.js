/**
 * User Service
 * Business Logic Layer (BLL) encapsulating business rules, validations, and orchestration.
 */

import { userRepository } from '../repositories/userRepository.js';
import { UserModel } from '../models/userModel.js';

export class UserService {
  constructor(repository = userRepository) {
    this.repository = repository;
  }

  async getAllUsers() {
    return await this.repository.findAll();
  }

  async getUserById(id) {
    const user = await this.repository.findById(id);
    if (!user) {
      const error = new Error(`User with ID '${id}' not found`);
      error.statusCode = 404;
      throw error;
    }
    return user;
  }

  async createUser(userData) {
    // 1. Validate entity structure using Model rules
    const validation = UserModel.validate(userData);
    if (!validation.isValid) {
      const error = new Error(validation.errors.join(', '));
      error.statusCode = 400;
      throw error;
    }

    // 2. Enforce business rules (e.g., duplicate email check)
    const existingUser = await this.repository.findByEmail(userData.email);
    if (existingUser) {
      const error = new Error('A user with this email address already exists');
      error.statusCode = 409;
      throw error;
    }

    // 3. Persist via repository
    return await this.repository.create({
      name: userData.name.trim(),
      email: userData.email.trim().toLowerCase(),
      role: userData.role || 'User',
    });
  }

  async deleteUser(id) {
    // Verify existence first
    await this.getUserById(id);
    return await this.repository.deleteById(id);
  }
}

export const userService = new UserService();
