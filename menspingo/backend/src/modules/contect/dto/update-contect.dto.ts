import { PartialType } from '@nestjs/mapped-types';
import { CreateContectDto } from './create-contect.dto';

export class UpdateContectDto extends PartialType(CreateContectDto) {}
