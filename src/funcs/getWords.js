var words = require('an-array-of-english-words');

const getWords = (letter) => {
	const wordlist = words.filter((word) => word.startsWith(letter));
	const final = wordlist[Math.floor(Math.random() * wordlist.length)] + ' ';
	console.log(final);
	return final;
};

export default getWords;
