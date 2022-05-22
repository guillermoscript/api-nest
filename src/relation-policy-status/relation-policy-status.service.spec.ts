import { Test, TestingModule } from '@nestjs/testing';
import { RelationPolicyStatusService } from './relation-policy-status.service';

describe('RelationPolicyStatusService', () => {
  let service: RelationPolicyStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationPolicyStatusService],
    }).compile();

    service = module.get<RelationPolicyStatusService>(RelationPolicyStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
