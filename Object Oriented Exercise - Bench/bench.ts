// Object Oriented Exercise - Bench:
// Create a "Bank Account" class with methods for depositing, withdrawing and checking the
// balance. Then create subclasses for different account types, such as "Savings Account" and
// "Checking Account", with specific rules for each account type.

abstract class BankAccount {
	private $balance: number = 0;

	deposit(amount: number) {
		if (amount < 0) {
			throw new Error('Cannot deposit negative amount');
		}

		this.$balance += amount;
	}

	withdraw(amount: number) {
		if (amount > this.$balance) {
			throw new Error('Insufficient funds');
		}

		this.$balance -= amount;
	}

	checkBalance() {
		return this.$balance;
	}
}

class SavingsAccount extends BankAccount {
	withdraw(amount: number) {
		if (amount > 1000) {
			throw new Error('Cannot withdraw more than 1000');
		}

		super.withdraw(amount);
	}
}

class CheckingAccount extends BankAccount {}
