import { Test, TestingModule } from '@nestjs/testing';
import { ClientHasTomadorsController } from './client-has-tomadors.controller';
import { ClientHasTomadorsService } from './client-has-tomadors.service';

describe('ClientHasTomadorsController', () => {
  let controller: ClientHasTomadorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientHasTomadorsController],
      providers: [ClientHasTomadorsService],
    }).compile();

    controller = module.get<ClientHasTomadorsController>(ClientHasTomadorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
