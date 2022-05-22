import { PartialType } from '@nestjs/swagger';
import { CreateEntitiesHasPolizaDto } from './create-entities-has-poliza.dto';

export class UpdateEntitiesHasPolizaDto extends PartialType(CreateEntitiesHasPolizaDto) {}
