const person = {
    name: 'User',
    age: '25',
    greet() {
        console.log("Hi, " + this.name);
    }
}

// destructing 

const printName = ({name}) => {
    console.log(name);
}

const {name, age} = person;

console.log(name,age);



printName(person);

person.greet();
console.log(person);


// Playing with arrays
const hobbies = ['Sports', 'Cooking'];

for(let hobby in hobbies){
    console.log(hobbies[hobby]);
}

// spread operator
const copiedArray = [...hobbies];
console.log(copiedArray); 

// Rest operator

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4,5));

//// 
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

console.log(hobbies);

setTimeout(() => {
    console.log("User")
}, 2000);