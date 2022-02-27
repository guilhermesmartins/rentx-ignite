import 'reflect-metadata';
import CarsRepositoryInMemory from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import CreateCarUseCase from "./CreateUserUseCase";
import AppError from '@shared/errors/AppError';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: 'Fusca',
      description: 'carro do povo :shy:',
      brand: 'wolks',
      category_id: 'null',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 80
    });

    expect(car).toHaveProperty('id');
  });

  it("should not be able to create a car with a license plate that exists", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Fusca',
        description: 'carro do povo :shy:',
        brand: 'wolks',
        category_id: 'null',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 80
      });

      await createCarUseCase.execute({
        name: 'Fuscya',
        description: 'carro',
        brand: 'wolkfs',
        category_id: 'null',
        daily_rate: 232,
        license_plate: 'ABC-1234',
        fine_amount: 12
      });
  
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with avaiable true by default", async () => {
    const car = await createCarUseCase.execute({
      name: 'Fuscya',
      description: 'carro',
      brand: 'wolkfs',
      category_id: 'null',
      daily_rate: 232,
      license_plate: 'ABCD-1234',
      fine_amount: 12
    });

    expect(car.avaiable).toEqual(true);

  });
});