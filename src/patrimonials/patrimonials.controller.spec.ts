import { Test, TestingModule } from '@nestjs/testing';
import { PatrimonialsController } from './patrimonials.controller';
import { PatrimonialsService } from './patrimonials.service';

describe('PatrimonialsController', () => {
  let controller: PatrimonialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatrimonialsController],
      providers: [PatrimonialsService],
    }).compile();

    controller = module.get<PatrimonialsController>(PatrimonialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
