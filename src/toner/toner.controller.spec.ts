import { Test, TestingModule } from '@nestjs/testing';
import { TonerController } from './toner.controller';

describe('TonerController', () => {
  let controller: TonerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TonerController],
    }).compile();

    controller = module.get<TonerController>(TonerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
