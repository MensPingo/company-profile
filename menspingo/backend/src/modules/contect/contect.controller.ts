import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContectService } from './contect.service';
import { CreateContectDto } from './dto/create-contect.dto';
import { UpdateContectDto } from './dto/update-contect.dto';

@Controller('contect')
export class ContectController {
  constructor(private readonly contectService: ContectService) {}

  @Post()
  create(@Body() createContectDto: CreateContectDto) {
    return this.contectService.create(createContectDto);
  }

  @Get()
  findAll() {
    return this.contectService.findAll();
  }

}
