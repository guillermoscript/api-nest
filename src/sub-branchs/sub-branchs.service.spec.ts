import { Test, TestingModule } from '@nestjs/testing';
import { SubBranchsService } from './sub-branchs.service';

describe('SubBranchsService', () => {
  let service: SubBranchsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubBranchsService],
    }).compile();

    service = module.get<SubBranchsService>(SubBranchsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
