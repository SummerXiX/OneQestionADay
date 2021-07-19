export {
  index
}

function index(req, res) {
  console.log("new!")
  res.render("newReading/index", {
    title: "A new Reading",
    })
}












// function create(req, res) {
//     req.body.reader = req.user.profile
//     newReading.create(req.body)
//     .then( newReading=> {
//       res.redirect('/newReading')
//     })
//     .catch(err => {
//       console.log(err)
//       res.redirect('/newReading')
//     })
//   }