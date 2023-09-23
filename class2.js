// Account
// Create an Account class that have.
// Properties:
// id: it's should be a uniq
// name: it's should be a string
// balance: it's should be hidden property and should have get and set methods
// Methods:
// get and set methods for the balance
// credit which should increase a new amount on the balance
// debit which should decrease an amount from the balance
// transferTo which takes other account and amount and transfer from current balance to the
// balance of the given account
// identifyAccounts, this should be a static method for identify accounts by id of them


class Account {
    constructor(name, primaryBalance ) {
        this.name = name;
        this.id = Account.uniqId();
        this._balance = typeof primaryBalance === 'number' ? primaryBalance : 0;
    }

    static uniqId() {
        return Math.floor(Math.random() * 100);
    }

    get balance() {
        return this._balance;
    }

    set balance(newBalance) {
        if (typeof newBalance === "number") {
          this._balance = newBalance;
        } else {
          throw new Error("Balance must be a number");
        }
    }

    credit(amount) {
        if(typeof amount === "number" && amount > 0) {
            this.balance += amount
        } else {
            throw new Error("Amount must be a positive number")
        }
    }

    debit(amount) {
        if(typeof amount === "number" && amount > 0) {
            if(this.balance >= amount) {
                this.balance -= amount
            } else {
                throw new Error("Insufficient funds");
            }
        } else {
            throw new Error("Amount must be a positive number")
        }
    }

    transferTo(otherAcc, amount) {
        if(typeof amount === "number" && amount > 0) {
            if( this.balance >= amount) {
                this.debit(amount);
                otherAcc.credit(amount)
            } else {
                throw new Error ("Insufficient funds");
            }
        } else {
            throw new Error("Amount must be a positive number")
        }
    }

    static identifyAccounts() {

    }


}


const saving = new Account("saving", 1000);
const current = new Account("current", 8000);

saving.credit(5000);
saving.debit(1000);
saving.debit(2000);
saving.transferTo(current, 1000);
console.log(saving.balance);
console.log(current.balance);
const res = Account.identifyAccounts(current, saving);
console.log(saving.balance);
// saving.balance = "hello";
// saving.submitBalance("hello");
// console.log(saving);