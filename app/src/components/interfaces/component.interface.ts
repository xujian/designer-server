import { Document } from 'mongoose'

export interface Component extends Document {
  readonly type: string
  readonly props: object
  created: Date
  updated: Date
}
