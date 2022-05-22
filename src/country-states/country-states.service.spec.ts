import { Test, TestingModule } from '@nestjs/testing';
import { CountryStatesService } from './country-states.service';

describe('CountryStatesService', () => {
  let service: CountryStatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryStatesService],
    }).compile();

    service = module.get<CountryStatesService>(CountryStatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
