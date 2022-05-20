import { Test, TestingModule } from '@nestjs/testing';
import { EntitiesHasPolizasService } from './entities-has-polizas.service';

describe('EntitiesHasPolizasService', () => {
  let service: EntitiesHasPolizasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntitiesHasPolizasService],
    }).compile();

    service = module.get<EntitiesHasPolizasService>(EntitiesHasPolizasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
