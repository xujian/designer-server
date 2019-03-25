import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Component } from './interfaces/component.interface'
import { CreateComponentDto } from './dto/create-component.dto'
import { Model } from 'mongoose'

@Injectable()
export class ComponentsService {
  constructor(
    @InjectModel('Component')
    private readonly componentModel: Model<Component>,
  ) {}

  async findByPlex(
    plexid: string,
  ): Promise<Component[]> {
    const components =
      await this.componentModel.find({plexid}).exec()
    return components
  }

  async create(
    createComponentDto: CreateComponentDto,
  ): Promise<Component> {
    const created = new this.componentModel(
      createComponentDto,
    )
    return await created.save()
  }
}
