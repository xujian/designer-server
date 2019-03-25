import * as mongoose from 'mongoose'

export const ComponentSchema = new mongoose.Schema({
  name: String,
  plexid: String,
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
