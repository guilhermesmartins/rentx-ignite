import { container } from 'tsyringe';

import UsersRepository from '../../modules/accounts/repositories/implementations/UsersRepository';
import IUsersRepository from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/Cars/repositories/ICategoriesRepository';
import CategoriesRepository from '../../modules/Cars/repositories/Implementations/CategoriesRepository';
import SpecificationsRepository from '../../modules/Cars/repositories/Implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/Cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
