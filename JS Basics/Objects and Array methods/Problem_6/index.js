function group(arr, criteria) {
    const groupedPeople = {};

    for(const person of arr) {
        const groupKey = person[criteria];

        if(!groupedPeople[groupKey]) {
            groupedPeople[groupKey] = [];
        }

        groupedPeople[groupKey].push(person);
    }
    return groupedPeople
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];
  
const groupByAge = group(people, "age");
console.log(groupByAge);
