import * as mongoose from 'mongoose'

export const PlexSchema = new mongoose.Schema({
  uuid: String,
  title: String,
  fixed: Boolean,
  position: {
    x: Number,
    y: Number,
    z: Number,
  },
  dimension: {
    width: {
      type: String,
      get: v => {
        if (typeof v === 'number') {
          return v + 'px'
        } else {
          return v
        }
      },
    },
    height: {
      type: String,
      get: v => {
        if (typeof v === 'number') {
          return v + 'px'
        } else {
          return v
        }
      },
    },
  },
})
