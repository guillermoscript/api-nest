import { Test, TestingModule } from '@nestjs/testing';
import { ClientHasTakerService } from './client-has-tomadors.service';

describe('ClientHasTakerService', () => {
  let service: ClientHasTakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientHasTakerService],
    }).compile();

    service = module.get<ClientHasTakerService>(ClientHasTakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
