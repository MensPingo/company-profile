import { Test, TestingModule } from '@nestjs/testing';
import { ContectController } from './contect.controller';
import { ContectService } from './contect.service';

describe('ContectController', () => {
  let controller: ContectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContectController],
      providers: [ContectService],
    }).compile();

    controller = module.get<ContectController>(ContectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
