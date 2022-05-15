import { PartialType } from '@nestjs/swagger';
import { CreateBranchTypeDto } from './create-branch-type.dto';

export class UpdateBranchTypeDto extends PartialType(CreateBranchTypeDto) {}
