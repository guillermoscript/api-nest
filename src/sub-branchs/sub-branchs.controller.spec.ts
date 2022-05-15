import { Test, TestingModule } from '@nestjs/testing';
import { SubBranchsController } from './sub-branchs.controller';
import { SubBranchsService } from './sub-branchs.service';

describe('SubBranchsController', () => {
  let controller: SubBranchsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubBranchsController],
      providers: [SubBranchsService],
    }).compile();

    controller = module.get<SubBranchsController>(SubBranchsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
