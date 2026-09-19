/**
 * User Model
 * Represents the User domain entity structure & factory/validation methods.
 */

export class UserModel {
  constructor({ id, name, email, role = 'User', createdAt = new Date().toISOString() }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.createdAt = createdAt;
  }

  static validate(userData) {
    const errors = [];
    if (!userData.name || typeof userData.name !== 'string' || userData.name.trim() === '') {
      errors.push('Name is required and must be a non-empty string.');
    }
    if (!userData.email || typeof userData.email !== 'string' || !userData.email.includes('@')) {
      errors.push('A valid email address is required.');
    }
    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
