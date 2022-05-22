import { Test, TestingModule } from '@nestjs/testing';
import { PatrimonialsService } from './patrimonials.service';

describe('PatrimonialsService', () => {
  let service: PatrimonialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatrimonialsService],
    }).compile();

    service = module.get<PatrimonialsService>(PatrimonialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
