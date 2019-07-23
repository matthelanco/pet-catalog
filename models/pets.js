// models/pets.js
const knex = require('../db/knex');

// Import the database
const db = require('./../db/config');

// Instantiate a new object.
// This will interface with the pets-app database.
// Specifically, the pets table.
const Pet = {};

// Define methods for the Pet object

// Returns all pets from the table
Pet.findAll = () => {
  return db.query(
    `SELECT * FROM pets`
  );
};

// Return one pet with the specific id
Pet.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM pets
      WHERE id = $1
    `,
    [id]
  );
};

Pet.addPet = (name) => {
  return knex('pets')
  .insert({name:name})
};

// Insert a new pet with specified id

// Export the Pet object
module.exports = Pet;
