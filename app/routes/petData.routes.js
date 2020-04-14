module.exports = app => {
    const petData = require("../controllers/petData.controller.js");
  
    // Create a new PetData
    app.post("/petData", petData.create);
  
    // Retrieve all PetDatas
    app.get("/petData", petData.findAll);
  
    // Retrieve a single PetData with dataId
    app.get("/petData/:dataId", petData.findOne);

    // Retrieve all PetData with petId
    app.get("/petData/pet/:petId", petData.findByPetId);

    //Retrieve the last 5 petData from pet with petId
    app.get("/petData/pet/5/:petId", petData.find5ByPetId);
  
    // Update a PetData with dataId
    app.put("/petData/:dataId", petData.update);
  
    // Delete a PetData with dataId
    app.delete("/petData/:dataId", petData.delete);
  
    // Delete all PetData
    app.delete("/petData", petData.deleteAll);

    // Delete all PetData by petId
    app.delete("/petData/:petId", petData.deleteAllByPetId);
  };