import mongoose from 'mongoose'

export {
  Card
}

const CardSchema = new mongoose.Schema({
  name: String,
  meaning: String,
  answer: String,
}, {
  timestamps: true
})

const Card = mongoose.model('Card', CardSchema)

// // Reading Schema - a record of the cards that are drawn 
// const =
// name:
// meaning:
// // and a comment Schema in the same file
// // embed comments into the reading 
