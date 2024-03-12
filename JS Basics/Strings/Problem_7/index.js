function parseURL(str) {
    const regex = /(.*):\/\/([^\/]+)(\/.*)$/i;
    const matches = str.match(regex);
    const protocol = matches[1];
    const server = matches[2];
    const resource = matches[3];
    return console.log(`http://telerikacademy.com/?protocol=${protocol}&server=${server}&resource=${resource}`);
    //return console.log("protocol: " + protocol + "\nserver: " + server + "\nresource: " + resource);
}

const strArr = ['http://telerikacademy.com/Courses/Courses/Details/239'];
const sample = strArr.toString();
parseURL(sample);
