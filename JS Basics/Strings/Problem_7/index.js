function queryParameter(arr) {
  const url = arr[0].toString();
  const regex = /(?<protocol>.*):\/\/(?<server>.*?)(?<resource>\/.*)?(?<query>\?.*)$/;
  urlMatch = url.match(regex);

  const { protocol, server, resource, query } = urlMatch.groups;

  let queryParams = {};
  if (query) {
    const queryParamsStr = query.substring(1);
    const pairs = queryParamsStr.split("&");
    pairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      queryParams[key] = value;
    });
  }

  return {
    protocol: protocol,
    server: server,
    resource: resource,
    query: queryParams,
  };
}

const urlArr = ["http://telerikacademy.com/Courses/Courses/Details/239?asd=1&dsd=2"];
console.log(queryParameter(urlArr));

/*
function parseURL(str) {
    const regex = /(.*):\/\/([^\/]+)(\/.*)$/i;
    const matches = str.match(regex);
    const protocol = matches[1];
    const server = matches[2];
    const resource = matches[3];
    //return console.log(`http://telerikacademy.com/?protocol=${protocol}&server=${server}&resource=${resource}`);
    return console.log("protocol: " + protocol + "\nserver: " + server + "\nresource: " + resource);
}

const strArr = ['http://telerikacademy.com/Courses/Courses/Details/239'];
const sample = strArr.toString();
parseURL(sample);
*/
