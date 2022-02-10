import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import User from '@modules/accounts/entities/User';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';

export default class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    driver_license,
    password,
    username
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driver_license,
      password,
      username
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);

    return user;
  }
}
