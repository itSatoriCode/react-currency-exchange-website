const fs = require('fs');

// fs.writeFile('data.json', 'hello there', () => {
// 	console.log('dsds');
// });

try {
	const data = fs.readFileSync('currency.json');

	const curs = JSON.parse(data);

	const arr = Object.entries(curs).map((el) => {
		return { cur: el[1].code, name: el[1].name };
	});
	// console.log(Object.entries(curs));
	// console.log(Object.entries(curs)[1][1]);
	// console.log(arr);

	fs.writeFile('data.json', JSON.stringify(arr.sort()), () => {});
} catch (err) {
	console.log(err);
}
