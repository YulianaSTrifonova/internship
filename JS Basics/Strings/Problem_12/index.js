function generateList(arr, template) {
    const regex = /-{(.*?)}-/g;
    let listedItems = arr.map(item => {
        return template.replace(regex, (match, property) => {
            return item[property] || match;
        });
    });

    const listHtml = `<ul>\n${listedItems.map(li =>`<li>${li}</li>`).join("\n")}\n</ul>`

    return listHtml;
}

let people = [
    {
        name: 'Petar',
        age: 14
    },
    {
        name: 'Gosho',
        age: 21
    },
    {
        name: 'Maria',
        age: 52
    },
    {
        name: 'Pesho',
        age: 37
    }
]

let template = document.getElementById("list-item").innerHTML;
let peopleList = generateList(people, template);
console.log(peopleList);

//https://regexr.com/