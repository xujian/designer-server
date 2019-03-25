import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ComponentSchema } from 'src/components/schemas/component.schema'
import { ComponentsController } from './components.controller'
import { ComponentsService } from './components.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Component',
        schema: ComponentSchema,
      },
    ]),
  ],
  controllers: [ComponentsController],
  providers: [ComponentsService],
})
export class ComponentsModule {}
