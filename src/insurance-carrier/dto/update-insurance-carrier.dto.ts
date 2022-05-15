import { PartialType } from '@nestjs/swagger';
import { CreateInsuranceCarrierDto } from './create-insurance-carrier.dto';

export class UpdateInsuranceCarrierDto extends PartialType(CreateInsuranceCarrierDto) {}
