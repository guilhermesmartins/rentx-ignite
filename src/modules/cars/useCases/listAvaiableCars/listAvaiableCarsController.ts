import { Response, Request } from "express";
import { container } from "tsyringe";
import ListAvaiableCarsUseCase from "./ListAvaiableCarsUseCase";

export default class ListAviableCarsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { brand, name, category_id } = req.query;

    const listAvaiableCarsUseCase = container.resolve(ListAvaiableCarsUseCase);

    const cars = await listAvaiableCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });

    return res.json(cars);
  }
}