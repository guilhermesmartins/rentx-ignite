import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/Cars/Repositories/ICategoriesRepository';
import CategoriesRepository from '../../modules/Cars/Repositories/Implementations/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/Cars/Repositories/ISpecificationsRepository';
import SpecificationsRepository from '../../modules/Cars/Repositories/Implementations/SpecificationsRepository';
import IUsersRepository from '../../modules/accounts/repositories/IUsersRepository';
import UsersRepository from '../../modules/accounts/repositories/implementations/UsersRepository';

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