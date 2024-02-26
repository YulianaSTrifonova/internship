function findYoungest(arr) {
    if(arr.length === 0) {
        return "Invalid input or empty array";
    }

    let youngest = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i].age < youngest.age) {
            youngest = arr[i]
        }
    }

    return youngest.firstname + " " + youngest.lastname;
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 }
];


console.log(findYoungest(people));
