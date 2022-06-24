import { Test, TestingModule } from '@nestjs/testing';
import { ClientHasTakerController } from './client-has-tomadors.controller';
import { ClientHasTakerService } from './client-has-tomadors.service';

describe('ClientHasTakerController', () => {
  let controller: ClientHasTakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientHasTakerController],
      providers: [ClientHasTakerService],
    }).compile();

    controller = module.get<ClientHasTakerController>(ClientHasTakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
