import { Test, TestingModule } from '@nestjs/testing';
import { BranchTypesService } from './branch-types.service';

describe('BranchTypesService', () => {
  let service: BranchTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BranchTypesService],
    }).compile();

    service = module.get<BranchTypesService>(BranchTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
