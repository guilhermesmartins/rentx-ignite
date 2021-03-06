import { describe, it, beforeEach } from '@jest/globals';
import AppError from '@shared/errors/AppError';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import UsersRepositoryInMemory from '../../repositories/in-memory/UsersRepositoryInMemory';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import AuthenticateUserUseCase from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '0823013',
      email: 'user@test.com',
      password: '1234',
      name: 'John Doe',
      username: 'johndoe123'
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'user@email',
        password: 'user.password'
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '42421',
        email: 'user@gmail.com',
        password: '123456',
        name: 'John Doe',
        username: 'johndoe123'
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrectPassword'
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
