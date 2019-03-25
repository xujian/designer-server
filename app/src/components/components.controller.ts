import { Controller, Post, Res, Body, HttpStatus, Get, Param, NotFoundException } from '@nestjs/common'
import { ComponentsService } from './components.service'
import { CreateComponentDto } from './dto/create-component.dto'

@Controller('')
export class ComponentsController {
  constructor(private componentsService: ComponentsService) {}

  @Post('/components')
  async addComponent(
    @Res() res,
    @Body() createComponentDto: CreateComponentDto,
  ) {
    const componnet = await this.componentsService
      .create(createComponentDto)
    return res.status(HttpStatus.OK).json({
      message: 'Component created',
      componnet,
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
    @Param('plexid') plexid,
  ) {
    const components = await this.componentsService
      .findByPlex(plexid)
    return res.status(HttpStatus.OK).json(components)
  }
}
