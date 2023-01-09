const mongoose = require('mongoose')

const Schema = mongoose.Schema

const querySchema = new Schema({
  username: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  isResolved: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Query', querySchema)

