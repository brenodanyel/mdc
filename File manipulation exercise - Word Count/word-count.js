// File manipulation exercise - Word Count:
// Write a program that counts the number of words in a text file given as input. The program
// must disregard whitespace and evaluation.

const fs = require('fs');

function wordCount(path) {
	const content = fs.readFileSync(path, 'utf-8');
	return content.split(' ').length;
}

console.log(wordCount(__dirname + '/file.txt'));
