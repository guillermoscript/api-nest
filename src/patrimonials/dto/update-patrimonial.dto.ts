import { PartialType } from '@nestjs/swagger';
import { CreatePatrimonialDto } from './create-patrimonial.dto';

export class UpdatePatrimonialDto extends PartialType(CreatePatrimonialDto) {}
