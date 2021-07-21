import { Reading } from "../models/reading.js";

export { index };

function index(req, res) {
  Reading.find({})
    .then((readings) => {
      console.log(readings);
      res.send(readings);
      // res.render("pastReadings/index", {
      //   reading,
      //   title: "Past Readings",
      // });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pastReadings/index");
    });
}
