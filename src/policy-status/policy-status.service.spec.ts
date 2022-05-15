import { Test, TestingModule } from '@nestjs/testing';
import { PolicyStatusService } from './policy-status.service';

describe('PolicyStatusService', () => {
  let service: PolicyStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolicyStatusService],
    }).compile();

    service = module.get<PolicyStatusService>(PolicyStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
