import { Router } from 'express'

export {
  router
}

const router = Router()

router.get('/newreadings', function (req, res){
    console.log('this is new readings')
    res.render('newreadings')
  })