import { data } from "./cards.js";

import { Reading, Card } from "../models/reading.js";
import { User } from "../models/user.js";

export { index, showResult, addComment };

function index(req, res) {
  Reading.find({})
    .then((reading) => {
      res.render("newReading/index", {
        reading,
        title: "A new Reading",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/newReading");
    });
}

function showResult(req, res) {
  const length = data.cards.length;
  const randomNums = [];

  while (randomNums.length < 3) {
    const num = Math.floor(Math.random() * length);
    if (randomNums.includes(num)) {
      continue;
    } else {
      randomNums.push(num);
    }
  }

  const randomCard1 = data.cards[randomNums[0]];
  const randomCard2 = data.cards[randomNums[1]];
  const randomCard3 = data.cards[randomNums[2]];

  res.render("newReading/result", {
    randomCard1,
    randomCard2,
    randomCard3,
    title: "result",
    question: req.body.question,
  });
}
// how to get question into the req.body
const addComment = async (req, res) => {
  console.log(req.body)
  const obj = await req.body;
  const userId = obj.profileId;

  console.log(userId);

  const question = obj.question;
  const comment = obj.comment;
  const card1 = {
    img: obj.img[0],
    name: obj.name[0],
    number: obj.number[0]
  };
  const card2 = {
    img: obj.img[1],
    name: obj.name[1],
    number: obj.number[1]
  };
  const card3 = {
    img: obj.img[2],
    name: obj.name[2],
    number: obj.number[2]
  };
  
  // Step 1: Add each card to the database
  const cards = await Card.create([card1, card2, card3]);
  const newReading = {
      user: userId,
      question: question,
      card1: cards[0]._id,
      card2: cards[1]._id,
      card3: cards[2]._id,
      comment: comment,
  };
  
  const newestReading = await Reading.create(newReading);
  res.redirect("/pastReadings");
}

function show(req, res) {
  Reading.findById(req.params.id)
    .populate("reader")
    .then((reading) => {
      res.render("pastReadings/show", {
        readng,
        title: "reading",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pastReadings");
    });
}

// shuffle the card array and randomly generate three cards
// function shuffle(data) {
//   var currentIndex = data.length,
//     randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element
//     [data[currentIndex], data[randomIndex]] = [
//       data[randomIndex],
//       data[currentIndex],
//     ];
//   }

//   let firstThreeData = data.slice(0, 3);
//   let threeCards = firstThreeData.data.img;
//   let threeNames = firstThreeData.data.name;
//   console.log(threeCards, threeNames);
// }
