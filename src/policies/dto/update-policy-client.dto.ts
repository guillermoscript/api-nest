import { PartialType } from '@nestjs/swagger';
import { CreatePolicyClientDto } from './create-policy-client.dto';

export class UpdatePolicyClientDto extends PartialType(CreatePolicyClientDto) {}
