// Recursion exercise - Fibonacci:
// Write a function that calculates the nth number in the Fibonacci sequence. The Fibonacci
// sequence is formed by adding the two previous numbers, starting with 0 and 1 (or 1 and 1,
// depending on the initial order), and the first numbers in the sequence are: 0, 1, 1, 2, 3, 5, 8,
// 13, ...

function fibonacci(n: number): number {
	if (n < 0) {
		throw new Error('Cannot calculate negative fibonacci number');
	}

	if (n <= 1) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21
console.log(fibonacci(9)); // 34
console.log(fibonacci(10)); // 55
