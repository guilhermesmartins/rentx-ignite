import { getRepository, Repository } from "typeorm";
import { v4 } from 'uuid';

import User from '../../entities/User';
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../IUsersRepository";

export default class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    
  async create({ name, driver_license, email, password, username, id, avatar }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id: v4(),
      name,
      username,
      email,
      driver_license,
      isAdmin: false,
      password,
      avatar,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<undefined | User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ id });

    return user;
  }
}