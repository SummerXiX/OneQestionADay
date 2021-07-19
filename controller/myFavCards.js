// import {
    
//   } from '../models/card.model.js'
//   // import allCards from '../database/tarot-images.json';
//   import { readFile } from 'fs';
  
  

  export {
    favorites
  }
  

function favorites(req, res) {
    console.log("fav cards")
    res.render("myFavCards/index", {
      title: "My Favorite Cards",
      myFavCards: ['favCard1', 'favCard2', 'favCard3']
      })
  }
  
  