import { Test, TestingModule } from '@nestjs/testing';
import { ClientHasPoliciesService } from './entities-has-polizas.service';

describe('ClientHasPoliciesService', () => {
  let service: ClientHasPoliciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientHasPoliciesService],
    }).compile();

    service = module.get<ClientHasPoliciesService>(ClientHasPoliciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
