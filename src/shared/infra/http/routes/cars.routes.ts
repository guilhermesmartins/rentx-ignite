import CreateCarController from "@modules/cars/useCases/createCar/CreateCarController";
import ListAviableCarsController from "@modules/cars/useCases/listAvaiableCars/listAvaiableCarsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createCarController = new CreateCarController();
const listAvaiableCarsController = new ListAviableCarsController();

export const carsRoutes = Router();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);

carsRoutes.get('/avaiable', listAvaiableCarsController.handle);