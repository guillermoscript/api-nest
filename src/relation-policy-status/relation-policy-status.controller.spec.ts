import { Test, TestingModule } from '@nestjs/testing';
import { RelationPolicyStatusController } from './relation-policy-status.controller';
import { RelationPolicyStatusService } from './relation-policy-status.service';

describe('RelationPolicyStatusController', () => {
  let controller: RelationPolicyStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelationPolicyStatusController],
      providers: [RelationPolicyStatusService],
    }).compile();

    controller = module.get<RelationPolicyStatusController>(RelationPolicyStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
