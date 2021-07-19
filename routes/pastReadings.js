import { Router } from 'express'

export {
  router
}

const router = Router()

router.get('/pastReadings', function (req, res) {
    console.log('this is past readings')
    res.render('pastReadings')
  })
  