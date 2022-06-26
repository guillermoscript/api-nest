import { PartialType } from '@nestjs/swagger';
import { CreatePolicyPatrimonialDto } from './create-policy-patrimonial.dto';

export class UpdatePolicyPatrimonialDto extends PartialType(CreatePolicyPatrimonialDto) {}
