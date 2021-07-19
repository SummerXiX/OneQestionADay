import { Router } from 'express'

export {
  router
}

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})


router.get('/allCards', function (req, res){
  console.log('this is all cards')
  res.render('/allCards')
})

router.get('/newreadings', function (req, res){
  console.log('this is new readings')
  res.render('newreadings')
})

router.get('/favoriteCards', function (req, res) {
  console.log('this is fav cards')
  res.render('favoriteCards')
})

router.get('/pastReadings', function (req, res) {
  console.log('this is past readings')
  res.render('pastReadings')
})

router.get('/myProfile', function (req, res){
  console.log('this is profile')
  res.render('profile')
})





