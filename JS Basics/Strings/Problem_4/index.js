function parseTags(str){
    const regex = /<upcase>(.*?)<\/upcase>|<lowcase>(.*?)<\/lowcase>|<orgcase>(.*?)<\/orgcase>/g;
    str = str.replace(regex, (match, upcase, lowcase, orgcase) => {
        if(upcase) {
            upcase = upcase.toUpperCase();
            return upcase;
        }
        if(lowcase) {
            lowcase = lowcase.toLowerCase();
            return lowcase;
        }
        return orgcase;
    });
    return str;
}

const strArr = [ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ];
const sample = strArr.toString();
console.log(parseTags(sample));
