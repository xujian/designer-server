import { Module } from '@nestjs/common'
import { PlexesController } from './plexes.controller'
import { PlexesService } from './plexes.service'
import { MongooseModule } from '@nestjs/mongoose'
import { PlexSchema } from './schemas/plex.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Plex',
        schema: PlexSchema,
      },
    ]),
  ],
  controllers: [PlexesController],
  providers: [PlexesService],
})
export class PlexesModule {}
