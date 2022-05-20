import { PartialType } from '@nestjs/swagger';
import { CreateClientHasTomadorDto } from './create-client-has-tomador.dto';

export class UpdateClientHasTomadorDto extends PartialType(CreateClientHasTomadorDto) {}
