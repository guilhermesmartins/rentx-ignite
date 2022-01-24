import { Request, Response } from "express";
import { container } from "tsyringe";
import ImportCategoryUseCase from "./ImportCategoryUseCase";

export default class ImportCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        if(!file) {
            return res.status(500).send();
        }

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

        await importCategoryUseCase.execute(file);

        return res.status(201).send();
    }
}