import { Router } from 'express'

export {
  router
}

const router = Router()
router.get('/allCards', function (req, res){
  console.log('this is all cards')
  res.render('/allCards')
})