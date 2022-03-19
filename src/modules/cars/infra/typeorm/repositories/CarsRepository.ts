import { getRepository, Repository } from 'typeorm';

import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';
import ICarsRepository from '@modules/cars/repositories/ICarsRepository';

import Car from '../entities/Car';

export default class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({ ...data });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = await this.repository.findOne({
      license_plate
    });

    return car;
  }

  async findAvaiable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carsQuery = this.repository
      .createQueryBuilder('c')
      .where('avaiable = :avaiable', { avaiable: true });

    if (brand) {
      carsQuery.andWhere('c.brand = :brand', { brand });
    }

    if (name) {
      carsQuery.andWhere('c.name = :name', { name });
    }

    if (category_id) {
      carsQuery.andWhere('c.category_id = :category_id', { category_id });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne(id);

    return car as Car;
  }
}
