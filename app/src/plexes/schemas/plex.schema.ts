import * as mongoose from 'mongoose'

export const PlexSchema = new mongoose.Schema({
  uuid: String,
  title: String,
  fixed: Boolean,
  positon: {
    x: Number,
    y: Number,
    z: Number,
  },
  dimension: {
    width: Number,
    height: Number,
  },
  components: [String],
})
