function htmlText(arr) {
    let str = arr.join('');
    const regex = /<[^>]*>/g;
    str = str.replace(regex,'').trim().split(" ").filter(Boolean).join(" ");
    return console.log(str.trim());
}

const strArr = [
	'<html>',
	'  <head>',
	'    <title>Sample site</title>',
	'  </head>',
	'  <body>',
	'    <div>text',
	'      <div>more text</div>',
	'      and more...',
	'    </div>',
	'    in body',
	'  </body>',
	'</html>'
];

htmlText(strArr);
