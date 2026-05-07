import { Injectable } from '@nestjs/common';
import { CreateContectDto } from './dto/create-contect.dto';
import { UpdateContectDto } from './dto/update-contect.dto';

@Injectable()
export class ContectService {
  create(createContectDto: CreateContectDto) {

    return 'This action adds a new contect';
  }

  findAll() {
    return `This action returns all contect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contect`;
  }

  
}
