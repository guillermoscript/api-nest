import { Test, TestingModule } from '@nestjs/testing';
import { AgentContractsService } from './agent-contracts.service';

describe('AgentContractsService', () => {
  let service: AgentContractsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentContractsService],
    }).compile();

    service = module.get<AgentContractsService>(AgentContractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
