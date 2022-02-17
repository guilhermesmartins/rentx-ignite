// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from '@jest/globals';

import AppError from '@shared/errors/AppError';
import CategoriesRepositoryInMemory from '../../repositories/in-memory/CategoriesRepositoryInMemory';
import CreateCategoryUseCase from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create category', () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Fake category',
      description: 'Fake description'
    };

    await createCategoryUseCase.execute({
      description: category.description,
      name: category.name
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty('name');
  });

  it('should not be able to create a new category with name exists', async () => {
    expect(async () => {
      const category = {
        name: 'Fake category',
        description: 'Fake description'
      };

      await createCategoryUseCase.execute({
        description: category.description,
        name: category.name
      });

      await createCategoryUseCase.execute({
        description: category.description,
        name: category.name
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
