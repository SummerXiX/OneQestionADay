import { Router } from 'express'
import * as myProfileCtrl from "../controller/myProfile.js"

export {
  router
}

const router = Router()

router.get('/', myProfileCtrl.index)
  