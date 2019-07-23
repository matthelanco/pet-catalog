// routes/pet-routes.js

// Import express
const express = require('express');
// Define the router using the express router
const petRouter = express.Router();
const knex = require('../db/knex');

// Import the petsController
const petController = require('../controllers/pet-controller');

// For each route access the correct controller method

// Request all pets, send it to the / route
petRouter.get('/', petController.findAll);

// Request to add a new pet
petRouter.post('/', petController.addPet);

// Request single pet, send it to the /:id route
petRouter.get('/:id', petController.findById);

// Export the router
module.exports = petRouter;
