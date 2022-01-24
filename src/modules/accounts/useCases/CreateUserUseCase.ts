import { inject } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import IUsersRepository from "../repositories/IUsersRepository";

export default class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}
    
    async execute(data: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create(data);
    }
}