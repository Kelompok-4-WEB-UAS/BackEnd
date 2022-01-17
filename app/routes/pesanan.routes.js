module.exports = app => {
    const pesanans = require("../controllers/pesanan.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", pesanans.create);
  
    // Retrieve all Tutorials
    router.get("/", pesanans.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", pesanans.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", pesanans.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", pesanans.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", pesanans.delete);
  
    // Delete all Tutorials
    router.delete("/", pesanans.deleteAll);
  
    app.use('/api/pesanans', router);
  };