import CategoriesRepository from '../../repositories/Implementations/CategoriesRepository';
import ListCategoriesController from './ListCategoriesController';
import ListCategoriesUseCase from './ListCategoriesUseCase';

const categoriesRepository = new CategoriesRepository();
export const listCategoriesuseCase = new ListCategoriesUseCase(
  categoriesRepository
);
export const listCategoriesController = new ListCategoriesController();
