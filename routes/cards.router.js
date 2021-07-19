import { Router } from 'express'
import * as allcardsCtrl from "../controller/cards.controller.js"

export {
  router
}

const router = Router()

router.get('/', allcardsCtrl.index)


