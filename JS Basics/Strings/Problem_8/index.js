function replaceTags(str) {
    const regex = /<a href="([^"]+)">([^<]+)<\/a>/g;
    let result = str.replace(regex, '[$2]($1)');
    return result;
}

const strArr = [ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ];
const str = strArr.toString();
replaceTags(str);
