import * as mongoose from 'mongoose'

export const ComponentSchema = new mongoose.Schema({
  type: String,
  props: Object,
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
})
