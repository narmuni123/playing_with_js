const person = {
    name: 'User',
    age: '25',
    greet() {
        console.log("Hi, " + this.name);
    }
}
person.greet();
console.log(person);


// Playing with arrays
const hobbies = ['Sports', 'Cooking'];

for(let hobby in hobbies){
    console.log(hobbies[hobby]);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

console.log(hobbies);