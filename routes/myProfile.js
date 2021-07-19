import { Router } from 'express'

export {
  router
}

const router = Router()

router.get('/profile', function (req, res){
    console.log('this is profile')
    res.render('profile')
  })

  