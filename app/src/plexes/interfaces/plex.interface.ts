import { Document } from 'mongoose'

export interface Plex extends Document {
  readonly uuid: string
  plexid: string // parent id
  readonly title: string
  readonly fixed: boolean
  props: any
}
