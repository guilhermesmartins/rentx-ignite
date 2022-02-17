import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import CreateUserController from '@modules/accounts/useCases/createUser/CreateUserController';
import UpdateUserAvatarController from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

export const usersRouters = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouters.post('/', createUserController.handle);

usersRouters.patch(
  '/', 
  uploadAvatar.single("avatar"), 
  ensureAuthenticated,
  updateUserAvatarController.handle
);