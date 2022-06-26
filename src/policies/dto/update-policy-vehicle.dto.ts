import { PartialType } from '@nestjs/swagger';
import { CreatePolicyVehicleDto } from './create-policy-vehicle.dto';

export class UpdatePolicyVehicleDto extends PartialType(CreatePolicyVehicleDto) {}
