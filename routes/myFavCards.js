import { Router } from 'express'
import * as myFavCardsCtrl from "../controller/myFavCards.js"

export {
  router
}

const router = Router()

router.get('/', myFavCardsCtrl.favorites);


  


