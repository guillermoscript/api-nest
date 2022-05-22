import { PartialType } from '@nestjs/swagger';
import { CreateCountryStateDto } from './create-country-state.dto';

export class UpdateCountryStateDto extends PartialType(CreateCountryStateDto) {}
