import { Module } from '@nestjs/common';
import { ContectService } from './contect.service';
import { ContectController } from './contect.controller';

@Module({
  controllers: [ContectController],
  providers: [ContectService],
})
export class ContectModule {}
