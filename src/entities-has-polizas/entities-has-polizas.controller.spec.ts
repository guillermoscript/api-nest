import { Test, TestingModule } from '@nestjs/testing';
import { EntitiesHasPolizasController } from './entities-has-polizas.controller';
import { EntitiesHasPolizasService } from './entities-has-polizas.service';

describe('EntitiesHasPolizasController', () => {
  let controller: EntitiesHasPolizasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntitiesHasPolizasController],
      providers: [EntitiesHasPolizasService],
    }).compile();

    controller = module.get<EntitiesHasPolizasController>(EntitiesHasPolizasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
