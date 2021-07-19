import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

// profiles should have readings
// look at how flight(profiles) references destinations(readings)
//Full CRUd on one model. Create a comment, read a comment/display, Update, Delete
// put off my Fav cards
// Reading Schema should save all the random cards
