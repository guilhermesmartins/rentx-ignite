import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';
import Car from '@modules/cars/infra/typeorm/entities/Car';

import ICarsRepository from '../ICarsRepository';

export default class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      ...data
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = this.cars.find((car) => car.license_plate === license_plate);

    return car;
  }

  async findAvaiable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const cars = this.cars.filter((car) => {
      if (
        car.avaiable === true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car;
      }

      return null;
    });

    return cars;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id) as Car;
  }
}
