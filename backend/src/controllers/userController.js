/**
 * User Controller
 * Presentation/Controller Layer responsible for handling HTTP requests & responses.
 */

import { userService } from '../services/userService.js';

export class UserController {
  constructor(service = userService) {
    this.service = service;
  }

  getUsers = async (req, res, next) => {
    try {
      const users = await this.service.getAllUsers();
      res.status(200).json({
        success: true,
        count: users.length,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req, res, next) => {
    try {
      const user = await this.service.getUserById(req.params.id);
      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req, res, next) => {
    try {
      const newUser = await this.service.createUser(req.body);
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      await this.service.deleteUser(req.params.id);
      res.status(200).json({
        success: true,
        message: `User with ID '${req.params.id}' deleted successfully`,
      });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController();
