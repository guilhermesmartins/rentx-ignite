import CarsRepositoryInMemory from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import ListCarsUseCase from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepository: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepository);
  });
  
  it('should be able to list all avaiable cars', async () => {
    const car = await carsRepository.create({
      name: "feeg",
      description: "fegeg",
      daily_rate: 100,
      license_plate: "ABC-123a4",
      brand: "woks",
      fine_amount: 80,
      category_id: "ff5cf2ff-3964-46d9-a0b7-88654196198b"
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avaiable cars by name', async () => {
    const car = await carsRepository.create({
      name: "feeg2",
      description: "rgew",
      daily_rate: 100,
      license_plate: "AFC-123a4",
      brand: "unique",ro
      fine_amount: 80,
      category_id: "ff5cf2ff-3964-46d9-a0b7-88654196198b"
    });

    const cars = await listCarsUseCase.execute({
      brand: 'unique'
    });

    expect(cars).toEqual([car]);
  });
});