import { PartialType } from '@nestjs/swagger';
import { CreateRelationPolicyStatusDto } from './create-relation-policy-status.dto';

export class UpdateRelationPolicyStatusDto extends PartialType(CreateRelationPolicyStatusDto) {}
