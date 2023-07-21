// String manipulation exercise - Palindrome:
// Write a function that checks whether a word or phrase is a palindrome. A palindrome is a
// word that is read the same from left to right as from right to left, ignoring spaces and
// differentiating between case and emergency letters.

function isPalindrome(word: string): boolean {
	const input = word.toLowerCase().replace(/[^a-z0-9]/g, '');

	const output = word
		.split('')
		.reverse()
		.join('')
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '');

	return input === output;
}

console.log(isPalindrome('Socorram-me, Subi no ônibus em Marrocos')); // true
console.log(isPalindrome('Ana')); // true
console.log(isPalindrome('AnaA')); // false
