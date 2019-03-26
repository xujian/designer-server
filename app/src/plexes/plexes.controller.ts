import { Controller, Post, Res, Body, HttpStatus, Get, Param, NotFoundException } from '@nestjs/common'
import { PlexesService } from './plexes.service'
import { CreatePlexDto } from './dto/create-plex.dto'

@Controller('')
export class PlexesController {
  constructor(private service: PlexesService) {}

  @Post('/plexes')
  async save(
    @Res() res,
    @Body() dto: CreatePlexDto,
  ) {
    const plex = await this.service.save(dto)
    return res.status(HttpStatus.OK).json({
      message: 'Plex created',
      plex,
    })
  }
  /**
   * 获取 screen 所属的 components
   * @param response
   * @param plexid
   */
  @Get('/plexes')
  async all(
    @Res() res,
  ) {
    const components = await this.service.all()
    return res.status(HttpStatus.OK).json(components)
  }
}
