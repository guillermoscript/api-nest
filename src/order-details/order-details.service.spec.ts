import { Test, TestingModule } from '@nestjs/testing';
import { PolicyDetailsService } from './order-details.service';

describe('PolicyDetailsService', () => {
  let service: PolicyDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolicyDetailsService],
    }).compile();

    service = module.get<PolicyDetailsService>(PolicyDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
