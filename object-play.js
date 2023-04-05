const person = {
    name: 'User',
    age: '25',
    greet() {
        console.log("Hi, " + this.name);
    }
}
person.greet();
console.log(person);