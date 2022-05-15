import { PartialType } from '@nestjs/swagger';
import { CreateSubBranchDto } from './create-sub-branch.dto';

export class UpdateSubBranchDto extends PartialType(CreateSubBranchDto) {}
