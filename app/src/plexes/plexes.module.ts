import { Module } from '@nestjs/common'
import { PlexesController } from './plexes.controller'
import { PlexesService } from './plexes.service'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  controllers: [PlexesController],
  providers: [PlexesService],
})
export class PlexesModule {}
