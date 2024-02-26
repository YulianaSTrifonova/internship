function deepCopy(obj) {
    let clone = structuredClone(obj);
    return clone;
}

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    spouse: {
        name: "A"
    }
};

console.log(person1);
const person2 = deepCopy(person1);
person2.spouse.name = "B";
console.log(person1, person2);
