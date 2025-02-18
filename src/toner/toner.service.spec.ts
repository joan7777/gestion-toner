import { Test, TestingModule } from '@nestjs/testing';
import { TonerService } from './toner.service';

describe('TonerService', () => {
  let service: TonerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TonerService],
    }).compile();

    service = module.get<TonerService>(TonerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
