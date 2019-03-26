import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Plex } from './interfaces/plex.interface'
import { CreatePlexDto } from './dto/create-plex.dto'

@Injectable()
export class PlexesService {
  constructor(
    @InjectModel('Plex')
    private readonly model: Model<Plex>,
  ) {}

  async all(): Promise<Plex[]> {
    const plexes = await this.model.find().exec()
    return plexes
  }

  async find(uuid: string): Promise<Plex> {
    const plex = await this.model.findOne({ uuid }).exec()
    return plex
  }

  async save(dto: CreatePlexDto): Promise<Plex> {
    const doc = this.model.update(
      {uuid: dto.uuid},
      dto,
      {upsert: true},
    ).exec()
    return doc
  }
}
