import { Reading } from "../models/reading.js";

export {
  index
}

function index(req, res) {
Reading.deleteMany()
.then((readings) => {
  res.json({ message: 'success', results: readings })
}).catch((err) => {
  res.json({ message: 'error ', results: err});
})
}
