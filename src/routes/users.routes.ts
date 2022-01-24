import { Router } from 'express';
import CreateUserController from '../modules/accounts/useCases/CreateUserController';

export const usersRouters = Router();

const createUserController = new CreateUserController();

usersRouters.post('/', createUserController.handle);