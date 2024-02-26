function youngestMale(arr) {
    let youngestMale = arr.find((person) => person.gender === "male")
    arr.forEach((person) => {
        if(person.gender === "male" && person.age < youngestMale.age) {
            youngestMale = person;
        }
    });
    return youngestMale.firstname + " " + youngestMale.lastname;
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 16, gender: 'male' },
    { firstname: 'Bay', lastname: 'Ivan', age: 81, gender: 'male' },
    { firstname: 'John', lastname: 'Doe', age: 42, gender: 'female' },
    { firstname: 'Pesho', lastname: 'Pesho', age: 15, gender: 'male' },
    { firstname: 'Asdf', lastname: 'Xyz', age: 17, gender: 'female' },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22, gender: 'male' }
];

youngestMale(people);
