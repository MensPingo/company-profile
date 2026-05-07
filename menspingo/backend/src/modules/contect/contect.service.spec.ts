import { Test, TestingModule } from '@nestjs/testing';
import { ContectService } from './contect.service';

describe('ContectService', () => {
  let service: ContectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContectService],
    }).compile();

    service = module.get<ContectService>(ContectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
