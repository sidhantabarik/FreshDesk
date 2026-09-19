/**
 * User Routes
 * Maps API route endpoints to UserController handlers.
 */

import { Router } from 'express';
import { userController } from '../controllers/userController.js';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);

export default router;
