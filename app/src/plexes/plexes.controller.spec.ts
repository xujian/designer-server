import { Test, TestingModule } from '@nestjs/testing';
import { PlexesController } from './plexes.controller';

describe('Plexes Controller', () => {
  let controller: PlexesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlexesController],
    }).compile();

    controller = module.get<PlexesController>(PlexesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
