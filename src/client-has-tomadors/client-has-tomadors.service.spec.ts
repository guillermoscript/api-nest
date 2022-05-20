import { Test, TestingModule } from '@nestjs/testing';
import { ClientHasTomadorsService } from './client-has-tomadors.service';

describe('ClientHasTomadorsService', () => {
  let service: ClientHasTomadorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientHasTomadorsService],
    }).compile();

    service = module.get<ClientHasTomadorsService>(ClientHasTomadorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
