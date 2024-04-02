function groupPeople(arr) {
    const groupedPeople = arr.reduce((group, person) => {
        const firstLetter = person.firstname[0].toLowerCase();
        if (!group[firstLetter]){
            group[firstLetter] = [];
        }
        group[firstLetter].push(person);
        return group;
    }, {});
    return groupedPeople;
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 16 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 15 },
    { firstname: 'Jane', lastname: 'Doe', age: 17 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

groupPeople(people);
