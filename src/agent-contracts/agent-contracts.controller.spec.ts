import { Test, TestingModule } from '@nestjs/testing';
import { AgentContractsController } from './agent-contracts.controller';
import { AgentContractsService } from './agent-contracts.service';

describe('AgentContractsController', () => {
  let controller: AgentContractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentContractsController],
      providers: [AgentContractsService],
    }).compile();

    controller = module.get<AgentContractsController>(AgentContractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
