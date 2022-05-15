import { Test, TestingModule } from '@nestjs/testing';
import { PolicyStatusController } from './policy-status.controller';
import { PolicyStatusService } from './policy-status.service';

describe('PolicyStatusController', () => {
  let controller: PolicyStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolicyStatusController],
      providers: [PolicyStatusService],
    }).compile();

    controller = module.get<PolicyStatusController>(PolicyStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
