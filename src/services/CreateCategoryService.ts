interface IRequest {
    name: string;
    description: string;
}

export default class CreateCategoryService {
    constructor() {

    }

    execute({ description, name }: IRequest) {
        const categoryExists = categoriesRepository.findByName(name);

        if(categoryExists) {
            return res.status(400).json({ error: "Category Already exists" });
        }
    
        categoriesRepository.create({ name, description });    
    }
}