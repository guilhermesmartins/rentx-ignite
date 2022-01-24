import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
export default class CreateCategoryUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryExists = await this.categoriesRepository.findByName(name);

        if(categoryExists) {
            throw new Error('Category already exists');
        }
    
        await this.categoriesRepository.create({ name, description });    
    }
}