// String manipulation exercise - Palindrome:
// Write a function that checks whether a word or phrase is a palindrome. A palindrome is a
// word that is read the same from left to right as from right to left, ignoring spaces and
// differentiating between case and emergency letters.

function isPalindrome(word: string): boolean {
	return word === word.split('').reverse().join('');
}

console.log(isPalindrome('ana'));
