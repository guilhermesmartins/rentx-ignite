import { getRepository, Repository } from 'typeorm';
import { Specification } from '@modules/Cars/entities/Specification';
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository
} from '../ISpecificationsRepository';

export default class SpecificationsRepository
  implements ISpecificationsRepository
{
  private repository: Repository<Specification>;
  // private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.repository = getRepository(Specification);
  }

  // public static getInstance(): SpecificationsRepository {
  //     if(!SpecificationsRepository.INSTANCE) {
  //         SpecificationsRepository.INSTANCE = new SpecificationsRepository();
  //     }

  //     return SpecificationsRepository.INSTANCE;
  // }

  async create({ description, name }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    });

    await this.repository.save(specification);
  }

  findByName(name: string): Promise<Specification | undefined> {
    const specification = this.repository.findOne({ name });

    return specification;
  }
}
