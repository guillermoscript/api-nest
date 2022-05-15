import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceCarrierController } from './insurance-carrier.controller';
import { InsuranceCarrierService } from './insurance-carrier.service';

describe('InsuranceCarrierController', () => {
  let controller: InsuranceCarrierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceCarrierController],
      providers: [InsuranceCarrierService],
    }).compile();

    controller = module.get<InsuranceCarrierController>(InsuranceCarrierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
