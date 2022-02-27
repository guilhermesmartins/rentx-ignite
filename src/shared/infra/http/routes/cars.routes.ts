import CreateCarController from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createCarController = new CreateCarController();

export const carsRoutes = Router();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);