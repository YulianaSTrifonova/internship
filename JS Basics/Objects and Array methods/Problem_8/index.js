function peopleOfAge(arr) {
    return arr.every((person) => person.age >= 18);
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 16 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 15 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 17 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

console.log(peopleOfAge(people));
