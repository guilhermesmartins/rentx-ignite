import CarsRepositoryInMemory from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import SpecificationsRepositoryInMemory from '@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory';
import AppError from '@shared/errors/AppError';

import CreateCarSpecificationUseCase from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();

    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it('should not be able to add a new specification to non existent car', () => {
    expect(async () => {
      await createCarSpecificationUseCase.execute({
        car_id: '1234',
        specifications_id: ['54321']
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'feeg',
      description: 'fegeg',
      daily_rate: 100,
      license_plate: 'ABC-123a4',
      brand: 'woks',
      fine_amount: 80,
      category_id: 'ff5cf2ff-3964-46d9-a0b7-88654196198b'
    });

    await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id: ['54321']
    });
  });
});
