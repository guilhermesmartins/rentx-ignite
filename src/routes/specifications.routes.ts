import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import CreateSpecificationController from '../modules/Cars/useCases/createSpecification/CreateSpecificationController';

export const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post('/', createSpecificationController.handle);