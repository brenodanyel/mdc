// Algorithm exercise - Factorial:
// Write a function that takes a positive integer as input and returns the factorial of that number.
// For example, if the given number is 5, the function should return 120 (1 * 2 * 3 * 4 * 5).

function factorial(n: number): number {
	let result = 1;

	for (let i = 1; i <= n; i++) {
		result *= i;
	}

	return result;
}

console.log(factorial(5));
