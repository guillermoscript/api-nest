import { PartialType } from '@nestjs/swagger';
import { CreatePolicyStatusDto } from './create-policy-status.dto';

export class UpdatePolicyStatusDto extends PartialType(CreatePolicyStatusDto) {}
