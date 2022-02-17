import CategoriesRepository from '../../infra/typeorm/repositories/CategoriesRepository';
import ImportCategoryController from './ImportCategoryController';
import ImportCategoryUseCase from './ImportCategoryUseCase';

const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
export const importCategoryController = new ImportCategoryController();
