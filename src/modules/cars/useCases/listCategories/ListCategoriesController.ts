import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListCategoriesUseCase from './ListCategoriesUseCase';

export default class ListCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
        const categories = await listCategoriesUseCase.execute();

        return res.status(200).send(categories);
    };
}