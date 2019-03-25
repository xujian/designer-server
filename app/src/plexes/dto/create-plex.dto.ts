export class CreatePlexDto {
  readonly uuid: string
  readonly title: string
  readonly fixed: boolean
  readonly position: {
    x: number;
    y: number;
    z: number;
  }
  dimension: {
    width: number;
    height: number;
  }
  components: string[]
}
