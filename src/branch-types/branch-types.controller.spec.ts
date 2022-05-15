import { Test, TestingModule } from '@nestjs/testing';
import { BranchTypesController } from './branch-types.controller';
import { BranchTypesService } from './branch-types.service';

describe('BranchTypesController', () => {
  let controller: BranchTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BranchTypesController],
      providers: [BranchTypesService],
    }).compile();

    controller = module.get<BranchTypesController>(BranchTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
