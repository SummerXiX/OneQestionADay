import { readFile } from 'fs/promises';
const json = JSON.parse(
  await readFile(
    new URL('../database/tarot_images.json', import.meta.url)
  )
)
console.log(json)











// import {
//   Card
// } from '../models/card.model.js'
// // import allCards from '../database/tarot-images.json';
// import fs from 'fs';

// export {
//   index,

// }

// const index = async (req, res) => {
//   let rawData = await fs.readFileSync('./database/tarot_images.json', 'utf-8');
//   let allCards = await JSON.parse(rawData); 
//   console.log(allCards);
//   console.log(typeof allCards);

//   res.render("allCards/index", {
//     title: "All Cards",
//     cards: allCards,
//     })
// }

  





