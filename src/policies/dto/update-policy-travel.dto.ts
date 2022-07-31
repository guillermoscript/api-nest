import { PartialType } from '@nestjs/swagger';
import { CreatePolicyTravelDto } from './create-policy-travel.dto';

export class UpdatePolicyTravelDto extends PartialType(CreatePolicyTravelDto) {}
