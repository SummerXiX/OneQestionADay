import {
  Card
} from '../models/card.model.js'
// import allCards from '../database/tarot-images.json';
import fs from 'fs';

export {
  index,

}

function index(req, res) {
  let rawData = fs.readFileSync('./database/tarot_images.json', 'utf-8');
  let allCards = JSON.parse(rawData);
  console.log(allCards);
  // readFile('../database/tarot-images.json', (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  //   const allCards = data;
  // });
  res.render("allCards/index", {
    title: "All Cards",
    allCards: allCards,
    })
}

  



