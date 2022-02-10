import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import AppError from '@errors/AppError';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(data.password, 8);

    // eslint-disable-next-line no-param-reassign
    data.password = passwordHash;

    await this.usersRepository.create(data);
  }
}
