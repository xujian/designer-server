import { Document } from 'mongoose'

export interface IPlex extends Document {
  readonly uuid: string
  plexid: string // parent id
  readonly title: string
  readonly fixed: boolean
  readonly position: {
    x: number,
    y: number,
    z: number,
  },
  dimension: {
    width: number,
    height: number,
  }
  components: string[]
}
