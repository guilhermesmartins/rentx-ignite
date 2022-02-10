import SpecificationsRepository from '../../repositories/Implementations/SpecificationsRepository';
import CreateSpecificationController from './CreateSpecificationController';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
export const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
