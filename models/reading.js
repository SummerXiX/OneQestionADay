
// make a ReadingSchema 
// make a commentSchema - answer
//Embed commentschema into the readingSchema
// look at the flights lab (flight/js)
// flights- > reading
// comment -> tickets

const commentSchema = new mongoose.Schema({
    Interpretation: String,
    Connotation: Boolean
})


const readingSchema = new mongoose.Schema({
    card1: Object,
    card2: Object,
    card3: Object,
    comment:  ,
})

