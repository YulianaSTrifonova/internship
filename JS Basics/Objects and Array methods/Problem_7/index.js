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
  const age = [19, 21, 23, 25, 26, 27, 29, 33, 37, 45];
  const gender = ["female", "male"];

  lastname.forEach((personLastname) => {
    //let age = parseInt(Math.floor(Math.random() * 20) + Math.random() * 20);
    let personAge = age[parseInt(Math.random() * 10)];
    let personGender = gender[Math.random() < 0.5 ? 0 : 1];
    if (personGender === "female") {
      personFirstname = firstnameFemale[parseInt(Math.random() * 10)];
    } else {
      personFirstname = firstnameMale[parseInt(Math.random() * 10)];
    }

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
