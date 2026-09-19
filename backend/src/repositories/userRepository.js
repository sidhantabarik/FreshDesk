/**
 * User Repository
 * Data Access Layer (DAL) responsible for interacting directly with the database / data source.
 */

import { UserModel } from '../models/userModel.js';

// In-memory data store for demonstration (easily replaced with database queries e.g. Mongoose, Prisma, pg, etc.)
let usersDatabase = [
  new UserModel({ id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' }),
  new UserModel({ id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Developer' }),
  new UserModel({ id: '3', name: 'Carol Williams', email: 'carol@example.com', role: 'Designer' }),
];

export class UserRepository {
  async findAll() {
    return usersDatabase;
  }

  async findById(id) {
    return usersDatabase.find((user) => user.id === id) || null;
  }

  async findByEmail(email) {
    return usersDatabase.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
  }

  async create(userData) {
    const newUser = new UserModel({
      id: String(Date.now()),
      ...userData,
    });
    usersDatabase.push(newUser);
    return newUser;
  }

  async deleteById(id) {
    const initialLength = usersDatabase.length;
    usersDatabase = usersDatabase.filter((user) => user.id !== id);
    return usersDatabase.length < initialLength;
  }
}

export const userRepository = new UserRepository();
