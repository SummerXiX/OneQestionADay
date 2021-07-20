import { Router } from 'express'
import * as newReadingCtrl from "../controller/newReading.js"

export {
  router
}

const router = Router()

router.get('/', newReadingCtrl.index)
router.post('/new', newReadingCtrl.show)