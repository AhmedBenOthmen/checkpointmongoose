require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");
const Person = require("./src/model/person.js");

// MongoDB URI from the .env file
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check if the connection is successful
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });


// // Create a new Person
// const newPerson = new Person({
//     name: 'Ahmed',
//     age: 34,
//     favoriteFoods: ['Pizza', 'Burger']
//   });


//   // Save the person to the database
//   newPerson.save()
//   .then(person => {
//     console.log('Person saved:', person);
//   })
//   .catch(err => {
//     console.error(err);
//   });


// // Define an array of persons data
// const arrayOfPersons = [
//   {
//     name: "Alice",
//     age: 28,
//     favoriteFoods: ["Sushi", "Chocolate"],
//   },
//   {
//     name: "Bob",
//     age: 35,
//     favoriteFoods: ["Pizza", "Ice Cream"],
//   },
//   {
//     name: "Charlie",
//     age: 22,
//     favoriteFoods: ["Burger", "Pasta"],
//   },
// ];

// // Create several persons using Model.create()
// Person.create(arrayOfPersons)
//   .then((createdPersons) => {
//     console.log("Persons created:", createdPersons);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


// Define the name you want to search for
// const searchName = 'Ahmed';

// // Use Model.find() to search for Persons with the given name
// Person.find({ name: searchName })
//   .then(foundPersons => {
//     console.log(`Persons with name '${searchName}':`, foundPersons);
//   })
//   .catch(err => {
//     console.error(err);
//   })



// Define the food you want to search for
// const searchFood = 'Pizza';

// //Model.findOne() to find a person with the given food in their favorites
// Person.findOne({ favoriteFoods: searchFood })
//   .then(foundPerson => {
//     console.log(`Person with '${searchFood}' in favorites:`, foundPerson);
//   })
//   .catch(err => {
//     console.error(err);
//   })



// Define the personId you want to search for
// const personId = '6565cb66e5686ddf99c1eb4c';

// // Use Model.findById() to find a person with the given id
// Person.findById(personId)
//   .then(foundPerson => {
//     console.log(`Person with _id '${personId}':`, foundPerson);
//   })
//   .catch(err => {
//     console.error(err);
//   })



// // Define the personId you want to search for
// const personId = '6565cb66e5686ddf99c1eb4c';

// // Use Model.findById() with promises to find a person with the given id
// Person.findById(personId)
//   .then(foundPerson => {
//     if (!foundPerson) {
//       console.log(`Person with _id '${personId}' not found.`);
//       return;
//     }

//     // Add "shan tounsi" to the list of favoriteFoods
//     foundPerson.favoriteFoods.push('shan tounsi');

//     // Save the updated Person
//     return foundPerson.save();
//   })
//   .then(updatedPerson => {
//     if (updatedPerson) {
//       console.log(`Person with _id '${personId}' updated:`, updatedPerson);
//     }
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     // Close the MongoDB connection after the operation
//     mongoose.connection.close();
//   });



// Define the personName you want to search for
// const personName = 'Alice';

// // Use Model.findOneAndUpdate() to find a person by name and update their age to 20
// Person.findOneAndUpdate(
//   { name: personName },
//   { age: 20 },
//   { new: true } // This option returns the updated document
// )
//   .then(updatedPerson => {
//     if (!updatedPerson) {
//       console.log(`Person with name '${personName}' not found.`);
//       return;
//     }

//     console.log(`Person with name '${personName}' updated:`, updatedPerson);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });




// const personId = '6565cdabf9921ddcd9437206'; // Replace with the actual _id value you're searching for

// // Use Model.findOneAndDelete() to delete one person by _id and retrieve the removed document
// Person.findOneAndDelete({ _id: personId })
//   .then(removedPerson => {
//     if (!removedPerson) {
//       console.log(`Person with _id '${personId}' not found.`);
//       return;
//     }

//     console.log(`Person with _id '${personId}' removed:`, removedPerson);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });



// Use Model.deleteMany() to delete all people with the name "Charlie"
// Person.deleteMany({ name: 'Charlie' })
//   .then(result => {
//     console.log(`Number of people named 'Charlie' deleted:`, result.deletedCount);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     // Close the MongoDB connection after the operation
//     mongoose.connection.close();
//   });



// Chain search query helpers to find people who like burritos
Person.find({ favoriteFoods: 'burritos' })
  .sort('name')   // Sort the results by name
  .limit(2)       // Limit the results to two documents
  .select('-age') // Hide their age
  .exec()
  .then(data => {
    console.log('People who like burritos:', data);
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });