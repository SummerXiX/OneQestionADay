import {
  Card
} from '../models/card.model.js'
// import allCards from '../database/tarot-images.json';
import { readFile } from 'fs';

export {
  index,

}

function index(req, res) {
  console.log("cards");
  // readFile('../database/tarot-images.json', (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  //   const allCards = data;
  // });
  res.render("allCards/index", {
    title: "All Cards",
    // cards: allCards,
    })
}
  



