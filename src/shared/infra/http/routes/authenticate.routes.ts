import { Router } from 'express';
import AuthenticateUserController from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';

export const authenticateRoutes = Router();

export const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/', authenticateUserController.handle);