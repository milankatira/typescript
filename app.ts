let num: number = 1;

function calculate(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calculate(4, 5));

function getTotal(number: Array<number>): number {
  return number.reduce((acc, item) => {
    return acc + item;
  }, 6);
}

console.log(getTotal([4, 3, 4]));

//Type alias

type User = {
  firstName: number;
  lastName: number;
};

const user: User = {
  firstName: 1,
  lastName: 3,
};

console.log(user.firstName);
console.log(user.lastName);

// custom type

type ID = number;

const UserData: ID = 1;

//interfaces

interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: string;
}

interface Account {
  accountNumber: number;
  balance: number;
  name: string;
  transactions: Array<Transaction>;
}

const bankAccount: Account = {
  accountNumber: 1,
  balance: 100,
  name: "milan",
  transactions: [
    {
      payerAccountNumber: 1,
      payeeAccountNumber: "1",
    },
  ],
};


interface user {
  firstName: string;
  lastName: string;
}

// Extend

interface user extends Account {
  name: string;
}

// Merge

//same name interface will merge automatically but in type it will throw duplicate identifier errors
// for prototype only use type 

const User: user = {
  firstName: "John",
  lastName: "Doe",
  accountNumber: 1,
  balance: 100,
  name: "milan",
  transactions: [
    {
      payerAccountNumber: 1,
      payeeAccountNumber: "1",
    },
  ],
};


//Unions
type UserId = number | string;

// Narrowing
function printId(id: UserId) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId('1');

function getFirstThree(x: string | number[]) {
    return x.slice(0, 3);
}

console.log(getFirstThree([1, 2, 3, 4, 5]));

// Generics

function logString(arg: string) {
    console.log(arg);
    return arg;
}


interface HasAge {
    age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
    return people.sort((a, b) => b.age - a.age)[0];
}

const people = [{ age: 30 }, { age: 40 }, { age: 10 }];

getOldest(people)