const { log } = require("console");

const name = "User";
let age = 25;
const  hasHobbies = true;

console.log(name);
console.log(age);
console.log(hasHobbies);

// Understanding arrow function
const  summarizeUser = (userName, userAge, userHobbies) => {
  return (
    "Name is " + userName + " age is " + userAge + " has hobbies " + userHobbies
  );
};


// function with single return statement and multiple arguments
const add = (a, b) => a + b;

// function with single return statement and one argument
const addOne = a => a + 1;

// function with single return statement and no argument
const addRandom = () => 1 + 2;

console.log(addRandom());

console.log(addOne(12));

console.log(add(12, 22));

console.log(summarizeUser(name, age, hasHobbies));
