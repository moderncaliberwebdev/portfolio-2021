import mongoose from 'mongoose'

const modelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

const Item = mongoose.model('Item', modelSchema)

export default Item
