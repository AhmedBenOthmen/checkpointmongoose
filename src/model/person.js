const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Person schema
const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String],
    default: [],
    
  },
  
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
