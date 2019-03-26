import { Controller, Post, Res, Body, HttpStatus, Get, Put, Param, NotFoundException } from '@nestjs/common'
import { ComponentsService } from './components.service'
import { CreateComponentDto } from './dto/create-component.dto'
import { UpdateComponentDto } from './dto/update-component.dto'

@Controller('')
export class ComponentsController {
  constructor(private service: ComponentsService) {}

  @Post('/components')
  async addComponent(@Res() res, @Body() dto: CreateComponentDto) {
    const component = await this.service.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'Component created',
      component,
    })
  }

  @Post('/components/:uuid')
  async updateComponent(
    @Res() res,
    @Param('uuid') uuid,
    @Body() dto: UpdateComponentDto) {
    const component = await this.service.update(
      uuid,
      dto)
    return res.status(HttpStatus.OK).json({
      message: 'Component updated',
      component,
    })
  }
  /**
   * 获取 plex 所属的 components
   * @param response
   * @param plexid
   */
  @Get('/plexes/:plexid/components')
  async getComponentsByPlexId(
    @Res() res,
    @Param('plexid') plexid) {
    const components = await this.service.findByPlex(plexid)
    return res.status(HttpStatus.OK).json(components)
  }
}
