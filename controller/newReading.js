
import {
  data
} from './cards.js';

export {
  index,
  show
}

function index(req, res) {
  console.log("new!")
  res.render("newReading/index", {
    title: "A new Reading",
    })
}

function show(req, res) {
  res.render("newReading/result", {
    title: "result",
    question: req.body.question,
    })
}

// shuffle the card array and randomly generate three cards
function shuffle(data) {
  var currentIndex = data.length,randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element
    [data[currentIndex], data[randomIndex]] = [
      data[randomIndex], data[currentIndex]];
  }

  let firstThreeData = data.slice(0,3)
  let threeCards = firstThreeData.data.img
  let threeNames = firstThreeData.data.name
  console.log(threeCards)
  return threeCards
}













// function create(req, res) {
//     req.body.reader = req.user.profile
//     newReading.create(req.body)
//     .then( newReading=> {
//       res.redirect('/newReading')
//     })
//     .catch(err => {
//       console.log(err)
//       res.redirect('/newReading')
//     })
//   }