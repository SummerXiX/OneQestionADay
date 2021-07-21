import mongoose from "mongoose"
const Schema = mongoose.Schema

export {
    Reading,
    Card,
}

const cardSchema = new mongoose.Schema({
    name: String,
    number: String,
    img: String,
}, { timestamps: true })


const readingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    question: String,
    card1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
    card2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
    card3: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
    comment: String,
  },
  { timestamps: true }
);

const Reading = mongoose.model('Reading', readingSchema)
const Card = mongoose.model('Card', cardSchema)

