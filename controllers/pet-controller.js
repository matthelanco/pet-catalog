// controllers/pet-controller.js

// Import the pet model.
const pet =  require('./../models/pets');

// Instantiate the controller object
const petController = {};

// Controller method for handling a request for all pets
petController.findAll = (req, res) => {
  // Uses the findAll method from pet
  pet.findAll()
  .then(pets => {
    // Sends the pets as a JSON object
    res.json({
      message: 'success',
      data: pets
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

petController.addPet = (req, res) => {
  const name = req.body.name;
  console.log(name);
  pet.addPet(name)
  .returning('*')
  .then((pet) => {
    res.status(201).json({
      message: 'success',
      data: pet
    });
  })
  .catch((err) => {
    res.status(500).json({
      message: 'error',
      data: err
    });
  });
};

// Controller method for handling a request for a single pet
petController.findById = (req, res) => {
  // pets method for finding by id, passes the id as an argument
  pet.findById(req.params.id)
  .then(pet => {
    // Sends the pet as a JSON object
    res.json({
      message: "success",
      data: pet
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Export the controller
module.exports = petController;
