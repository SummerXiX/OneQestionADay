import { Router } from 'express'
import * as allcardsCtrl from "../controller/cards.js"

export {
  router
}

const router = Router()

router.get('/', allcardsCtrl.index)


