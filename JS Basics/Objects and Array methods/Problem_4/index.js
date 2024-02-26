function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    spouse: {
        name: "A"
    }
};

let hasProp = hasProperty(person, "age");
console.log(hasProp);
