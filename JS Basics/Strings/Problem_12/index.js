function generateList(arr, template) {
    const regex = /-{(.*?)}-/g;
    let list = document.getElementById('list-item');
    let listedItems = arr.map((item) => {
      return template.replace(regex, (match, property) => {
        return item[property] || match;
      });
    });
  
    const ul = `<ul style="list-style-type: none">\n${listedItems
        .map((li) => `<li>${li}</li>`)
        .join("\n")}\n</ul>`;
  
    return list.innerHTML = ul;
}
  
let people = [
    {
      name: "Petar",
      age: 14
    },
    {
      name: "Gosho",
      age: 21
    },
    {
      name: "Maria",
      age: 51
    },
    {
      name: "Pesho",
      age: 37
    }
];
  
let tmpl = document.getElementById("list-item").innerHTML;
let peopleList = generateList(people, tmpl);
console.log(peopleList);  
