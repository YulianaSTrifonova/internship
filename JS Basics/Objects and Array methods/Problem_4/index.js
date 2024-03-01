function hasProperty(obj, prop) {
    for (const key in obj) {
        if (key === prop) {
            return true;
        }
    }
    return false;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let hasProp = hasProperty(person, "age");
console.log(hasProp);
