import mongoose from 'mongoose'
const Schema = mongoose.Schema

const advertSchema = new Schema({
  imgPath: { type: 'String', required: true },
  keywords: { type: 'String', required: true }
})

export const Advert = mongoose.model('Advert', advertSchema, 'advert')
