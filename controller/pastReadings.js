export {
    index
}
  
function index(req, res) {
    console.log("past reading!")
    res.render("pastReadings/index", {
      title: "A past Reading",
      })
}
  