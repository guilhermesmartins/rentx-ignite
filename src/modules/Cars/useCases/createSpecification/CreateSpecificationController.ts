import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';

export default class CreateSpecificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);

        await createSpecificationUseCase.execute({ description, name });
    
        return res.status(200).send();
    };
}