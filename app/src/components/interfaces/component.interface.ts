import { Document } from 'mongoose'

export interface Component extends Document {
  readonly plexid: string
  readonly name: string
  readonly props: object
}
