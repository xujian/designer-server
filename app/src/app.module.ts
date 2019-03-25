import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PlexesModule } from './plexes/plexes.module'
import { ComponentsModule } from './components/components.module'

@Module({
  imports: [
    PlexesModule,
    ComponentsModule,
    MongooseModule.forRoot('mongodb://mongo/designer'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
