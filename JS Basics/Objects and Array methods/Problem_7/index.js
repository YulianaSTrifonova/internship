function createPerson(firstname, lastname, age, gender) {
  return {
    firstname: firstname,
    lastname: lastname,
    age: age,
    gender: gender ? "female" : "male",
  };
}

function generatePersons() {
  const people = [];
  const firstnameFemale = [
    "Ally",
    "Lyla",
    "Kylia",
    "Daniela",
    "Reily",
    "Millie",
    "Hailey",
    "Miranda",
    "Zoe",
    "Molly",
  ];
  const firstnameMale = [
    "Alex",
    "Aaron",
    "Austin",
    "Bryce",
    "Jacob",
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

  lastname.forEach((lastname) => {
    let age = parseInt(Math.floor(Math.random() * 20) + Math.random() * 20);
    let gender = Math.random() < 0.5;
    if (gender > 0.5) {
      firstname = firstnameFemale[parseInt(Math.random() * 10)];
    } else {
      firstname = firstnameMale[parseInt(Math.random() * 10)];
    }

    const person = createPerson(firstname, lastname, age, gender);
    people.push(person);
  });

  return people;
}

console.log(generatePersons());
