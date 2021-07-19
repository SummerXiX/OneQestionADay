import { Router } from 'express'
import * as pastReadingsCtrl from "../controller/pastReadings.js"

export {
  router
}

const router = Router()

router.get('/', pastReadingsCtrl.index)