// Data structure exercise - Stack:
// Implement a stack data structure in a programming language of your choice. Then write
// functions to push (push) an element, pop (pop) an element, and check if the stack is empty.

class Stack<T> {
	private $items: T[] = [];

	push(item: T) {
		this.$items.push(item);
	}

	pop() {
		return this.$items.pop();
	}

	isEmpty() {
		return this.$items.length === 0;
	}

	get items() {
		return this.$items;
	}
}

const stringStack = new Stack<string>();
stringStack.push('a');
stringStack.push('b');
stringStack.push('c');
console.log(stringStack.items);

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.items);
