import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Component } from './interfaces/component.interface'
import { CreateComponentDto } from './dto/create-component.dto'
import { UpdateComponentDto } from './dto/update-component.dto'
import { Model } from 'mongoose'

@Injectable()
export class ComponentsService {
  constructor(
    @InjectModel('Component')
    private readonly model: Model<Component>,
  ) {}

  async findByPlex(plexid: string): Promise<Component[]> {
    const parents: string[] = plexid.split(',')
    const components = await this.model.find({
      plexid: {
        $in: parents,
      },
    }).exec()
    return components
  }

  async create(dto: CreateComponentDto): Promise<Component> {
    const created = new this.model(dto)
    return await created.save()
  }

  async update(
    uuid: string,
    dto: UpdateComponentDto): Promise<Component> {
    const doc = this.model.update(
      {uuid},
      dto,
    )
    return await doc
  }
}
