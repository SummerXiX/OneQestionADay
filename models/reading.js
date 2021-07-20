
// make a ReadingSchema 
// make a commentSchema - answer
//Embed commentschema into the readingSchema
// look at the flights lab (flight/js)
// flights- > reading
// comment -> tickets

const commentSchema = new mongoose.Schema({
    interpretation: String,
    connotation: Boolean,
})


const readingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    question: String,
    card1: Object,
    card2: Object,
    card3: Object,
    comment: commentSchema,
    }
)


