function deepCopy(obj) {
    if(obj === null || typeof obj != "object") {
        return obj;
    }

    const init = Array.isArray(obj) ? [] : {};

    return Object.keys(obj).reduce((clone, key) => {
        clone[key] = deepCopy(obj[key]);
        return clone;
    }, init)
};

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
