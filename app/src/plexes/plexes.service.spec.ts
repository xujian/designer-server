import { Test, TestingModule } from '@nestjs/testing';
import { PlexesService } from './plexes.service';

describe('PlexesService', () => {
  let service: PlexesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlexesService],
    }).compile();

    service = module.get<PlexesService>(PlexesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
