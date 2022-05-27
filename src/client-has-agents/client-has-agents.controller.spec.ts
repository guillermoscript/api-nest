import { Test, TestingModule } from '@nestjs/testing';
import { ClientHasAgentsController } from './client-has-agents.controller';
import { ClientHasAgentsService } from './client-has-agents.service';

describe('ClientHasAgentsController', () => {
  let controller: ClientHasAgentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientHasAgentsController],
      providers: [ClientHasAgentsService],
    }).compile();

    controller = module.get<ClientHasAgentsController>(ClientHasAgentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
