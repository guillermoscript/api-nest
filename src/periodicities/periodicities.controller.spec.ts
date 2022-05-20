import { Test, TestingModule } from '@nestjs/testing';
import { PeriodicitiesController } from './periodicities.controller';
import { PeriodicitiesService } from './periodicities.service';

describe('PeriodicitiesController', () => {
  let controller: PeriodicitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeriodicitiesController],
      providers: [PeriodicitiesService],
    }).compile();

    controller = module.get<PeriodicitiesController>(PeriodicitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
