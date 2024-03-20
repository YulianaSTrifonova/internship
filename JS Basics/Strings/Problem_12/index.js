function generateListHTML(arr, template) {
  const regEx = /-{(.*?)}-/g;
  let listedItems = arr.map((item) => {
    return template.replace(regEx, (match, property) => {
      return item[property] || match;
    });
  });

  const ul = `<ul style="list-style-type: none">\n${listedItems
    .map((li) => `<li>${li}</li>`)
    .join("\n")}\n</ul>`;

  return ul;
}

let people = [
  {
    name: "Petar",
    age: 14,
  },
  {
    name: "Gosho",
    age: 21,
  },
  {
    name: "Maria",
    age: 51,
  },
  {
    name: "Pesho",
    age: 37,
  },
];

let listElement = document.getElementById("list-item");
let tmpl = listElement.innerHTML;
let peopleListHTML = generateListHTML(people, tmpl);

listElement.innerHTML = peopleListHTML;
