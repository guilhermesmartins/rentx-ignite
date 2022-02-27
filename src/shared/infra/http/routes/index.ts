import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRouters } from './users.routes';
import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';

export const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRouters);
router.use('/sessions', authenticateRoutes);
router.use('/cars', carsRoutes);