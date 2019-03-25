export class CreateComponentDto {
  readonly uuid: string
  plexid: string
  readonly title: string
  readonly fixed: boolean
  readonly position: {
    x: number,
    y: number,
    z: number,
  }
  dimension: {
    width: number,
    height: number,
  }
  components: string[]
}
