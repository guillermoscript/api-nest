import { Test, TestingModule } from '@nestjs/testing';
import { CountryStatesController } from './country-states.controller';
import { CountryStatesService } from './country-states.service';

describe('CountryStatesController', () => {
  let controller: CountryStatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryStatesController],
      providers: [CountryStatesService],
    }).compile();

    controller = module.get<CountryStatesController>(CountryStatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
