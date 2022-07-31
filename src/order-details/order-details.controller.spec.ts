import { Test, TestingModule } from '@nestjs/testing';
import { PolicyDetailsController } from './order-details.controller';
import { PolicyDetailsService } from './order-details.service';

describe('PolicyDetailsController', () => {
  let controller: PolicyDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolicyDetailsController],
      providers: [PolicyDetailsService],
    }).compile();

    controller = module.get<PolicyDetailsController>(PolicyDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
