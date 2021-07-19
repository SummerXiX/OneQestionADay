import { Router } from 'express'

export {
  router
}

const router = Router()

router.get('/favoriteCards', function (req, res) {
    console.log('this is fav cards')
    res.render('favoriteCards')
  })



