import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export default class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
    
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find(category => category.name === name);

        return category;
    }
}