import { Reading } from "../models/reading.js";

export { 
  index,
  deleteReading as delete,
  edit,
  update,
  show,
 }

function index(req, res) {
  Reading.find({})
    .then((readings) => {
      // res.send(readings);
      res.render("pastReadings/index", {
        readings,
        title: "Past Readings",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pastReadings/index");
    });
}

function edit(req, res) {
  Reading.findById(req.params.id)
    .then((reading) => {
      res.render("pastReadings/edit", {
        reading,
        title: "Edit Comments",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pastReadings");
    });
}


function deleteReading(req, res) {
  Reading.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/pastReadings");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pastReadings");
    });
}

function show(req, res) {
  Reading.findById(req.params.id)
  .populate('card1 card2 card3')
    .then((reading) => { 
      console.log(reading)
      res.render("pastReadings/show", {
        reading,
        title: "Pasting Reading",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pastReadings");
    });
}

function update(req, res) {
  
  Reading.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      res.redirect(`/pastReadings/${reading._id}`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/pastReadings`);
    });
}

