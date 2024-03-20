const firstname = [
  "Millie",
  "Hailey",
  "Miranda",
  "Zoe",
  "Molly",
  "Diego",
  "Isaac",
  "Edward",
  "Sam",
  "Aiden",
];
const lastname = [
  "Abbott",
  "Abraham",
  "Adams",
  "Aldridge",
  "Allen",
  "Anderson",
  "Armstrong",
  "Banks",
  "Barnett",
  "Barrow",
];
const age = [19, 21, 23, 25, 26, 27, 29, 33, 37, 45];
const gender = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];

function createPerson(firstname, lastname, age, gender) {
  return {
    firstname: firstname,
    lastname: lastname,
    age: age,
    gender: gender,
  };
}

function generatePersons() {
  const people = [];

  firstname.forEach((personFirstname) => {
    const index = firstname.indexOf(personFirstname);
    const personLastname = lastname[index];
    const personAge = age[index];
    const personGender = gender[index];

    const person = createPerson(
      personFirstname,
      personLastname,
      personAge,
      personGender
    );
    people.push(person);
  });

  return people;
}

console.log(generatePersons());
