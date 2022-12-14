## TypeScript

#### variable type casting

```javascript
let num: number = 1;
```

#### function typecasting

```javascript

function calculate(num1: number, num2: number):number {
  return num1 + num2;
}

```


```javascript

function getTotal(number: Array<number>): number {
  return number.reduce((acc, item) => {
    return acc + item;
  }, 6);
}

```

#### Type alias

```javascript
type User = {
  firstName: number;
  lastName: number;
};
```

#### custom type

```javascript
type ID = number;

const UserData: ID = 1;
```

#### interfaces

```javascript

interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: string;
}

```

#### extend

```javascript

interface Account {
  accountNumber: number;
  balance: number;
  name: string;
  transactions: Array<Transaction>;
}

interface user extends Account {
  name: string;
}

```

#### merge interfaces
- same name interface will merge automatically but in type it will throw duplicate identifier errors
- for prototype only use type 


#### Unions

```javascript
type UserId = number | string;
```
#### Narrowing

```javascript
type UserId = number | string;

function printId(id: UserId) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId('1');

```

#### Generics
```javascript
function logString(arg: string) {
    console.log(arg);
    return arg;
}
```

```javascript

interface HasAge {
    age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
    return people.sort((a, b) => b.age - a.age)[0];
}

const people = [{ age: 30 }, { age: 40 }, { age: 10 }];

getOldest(people)
```
