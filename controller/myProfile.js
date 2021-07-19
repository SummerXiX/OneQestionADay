export {
    index
  }
  
  function index(req, res) {
    console.log("my profile")
    res.render("myProfile/index", {
      title: "Profile",
      })
  }
  