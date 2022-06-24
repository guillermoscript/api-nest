import { Test, TestingModule } from '@nestjs/testing';
import { ClientHasPoliciesController } from './entities-has-polizas.controller';
import { ClientHasPoliciesService } from './entities-has-polizas.service';

describe('ClientHasPoliciesController', () => {
  let controller: ClientHasPoliciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientHasPoliciesController],
      providers: [ClientHasPoliciesService],
    }).compile();

    controller = module.get<ClientHasPoliciesController>(ClientHasPoliciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
