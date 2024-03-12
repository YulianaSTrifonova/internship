function parseTags(str){
    const regex = /<upcase>(.*?)<\/upcase>|<lowcase>(.*?)<\/lowcase>|<orgcase>(.*?)<\/orgcase>/g;
    str = str.replace(regex, (match, upCase, lowCase, orgCase) => {
        if(upCase) {
            return upCase.toUpperCase();
        }
        if(lowCase) {
            return lowCase.toLowerCase();
        }
        return orgCase;
    });
    return str;
}

const strArr = [ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ];
const sample = strArr.toString();
console.log(parseTags(sample));
