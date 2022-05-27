import { Test, TestingModule } from '@nestjs/testing';
import { ClientHasAgentsService } from './client-has-agents.service';

describe('ClientHasAgentsService', () => {
  let service: ClientHasAgentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientHasAgentsService],
    }).compile();

    service = module.get<ClientHasAgentsService>(ClientHasAgentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
