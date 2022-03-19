import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository
} from '../ISpecificationsRepository';

export default class SpecificationsRepositoryInMemory
  implements ISpecificationsRepository
{
  specifications: Specification[] = [];

  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name
    });

    this.specifications.push(specification);
  }

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    ) as Specification;
  }

  async findByIds(ids: string[]): Promise<any[]> {
    const allSpecifications = this.specifications.filter((specification) => {
      if (specification.id) {
        return ids.includes(specification.id);
      }
    });

    return allSpecifications;
  }
}
