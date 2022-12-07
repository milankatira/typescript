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