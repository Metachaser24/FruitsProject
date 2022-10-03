//jshint esversion:6

const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/FruitsDB");
}

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  rating: {
  type: Number,
  min: 1,
  max: 10
},
  review: String
})

const Fruit = new mongoose.model ("Fruit", fruitSchema)

const fruit = new Fruit ({
  rating: 5,
  review: "This was amazing!"
})

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
})

const Person = new mongoose.model ("Person", personSchema)

const watermelon = new Fruit ({
  name: "Watermelon",
  rating: 9,
  review: "Great Fruit"

});

watermelon.save();


// const person = new Person ({
//   name: "Amy",
//   age: 22,
//   favoriteFruit: pineapple
// })
// //
// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Best fruit"
})

const orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "its cool i guess"
})

const strawberry = new Fruit({
  name: "Strawberry",
  rating: 6,
  review: "Ehhh"
})

// Fruit.insertMany([kiwi, orange, strawberry], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("It was Successful BABY!");
//   }
// });
//
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    console.log(fruits);

    mongoose.connection.close()

    fruits.forEach(fruit => console.log(fruit.name));
  }
});

// Person.deleteOne({_id: "630aee56d3c26cb6a61bf592"}, {name: "John"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully Deleted");
//   }
// })

Person.updateOne({name: "John"}, {favoriteFruit: watermelon}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully added Watermelon to John");
  }
})
