import CarsRepositoryInMemory from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import ListCarsUseCase from './ListAvaiableCarsUseCase';

let listAvaiableCarsUseCase: ListCarsUseCase;
let carsRepository: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    listAvaiableCarsUseCase = new ListCarsUseCase(carsRepository);
  });

  it('should be able to list all avaiable cars', async () => {
    const car = await carsRepository.create({
      name: 'feeg',
      description: 'fegeg',
      daily_rate: 100,
      license_plate: 'ABC-123a4',
      brand: 'woks',
      fine_amount: 80,
      category_id: 'ff5cf2ff-3964-46d9-a0b7-88654196198b'
    });

    const cars = await listAvaiableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaiable cars by name', async () => {
    const car = await carsRepository.create({
      name: 'Car3',
      description: 'rgew',
      daily_rate: 100,
      license_plate: 'AFC-123a4',
      brand: 'unique',
      fine_amount: 80,
      category_id: 'ff5cf2ff-3964-46d9-a0b7-88654196198b'
    });

    const cars = await listAvaiableCarsUseCase.execute({
      brand: 'Car3'
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaiable cars by category', async () => {
    const car = await carsRepository.create({
      name: 'Car3',
      description: 'rgew',
      daily_rate: 100,
      license_plate: 'AFC-123a4',
      brand: 'unique',
      fine_amount: 80,
      category_id: '54848'
    });

    const cars = await listAvaiableCarsUseCase.execute({
      category_id: '54848'
    });

    expect(cars).toEqual([car]);
  });
});
