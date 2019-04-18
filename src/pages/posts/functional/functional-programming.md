---
title: "functional programming"
date: 2018-01-12
tags: ["declarative", "Pure functions","Inmutable","currying"]
categories: ["Functional"]
draft: false
path: "functional/functional-programing"
---

# functional programming
In computer science, functional programming is a programming paradigm — a style of building the structure and elements of computer programs— that treats computation as the <b>evaluation of mathematical functions and avoids changing-state and mutable data</b>.

 It is a <b>declarative</b> programming paradigm, which means programming is done with expressions or declarations instead of statements. To put it in a diferent way we can say that
 <b>declarative programming cares about what</b> to perform an action and imperative cares about how to perform that action

## Declarative Vs. Imperative ||  What Vs. How

 In functional code, the output value of a function depends only on the arguments that are passed to the function, so calling a function f twice with the same value for an argument x produces the same result f(x) each time; this is in contrast to procedures depending on a local or global state, which may produce different results at different times when called with the same arguments but a different program state. Eliminating side effects, i.e., changes in state that do not depend on the function inputs, can make it much easier to understand and predict the behavior of a program, which is one of the key motivations for the development of functional programming.

In contrast, imperative programming changes state with commands in the source code, the simplest example being assignment. Imperative programming does have functions—not in the mathematical sense—but in the sense of subroutines. They can have side effects that may change the value of program state. Functions without return values therefore make sense. Because of this, they lack referential transparency, i.e., the same language expression can result in different values at different times depending on the state of the executing program.

<b>IMPERATIVE </b>
```javascript
  for (var i = 0; i < users.length; i++) {
    users[i].lastModified = new Date();
  }
```

<b>DECLARATIVE</b>
```javascript
  users.mnap((u) => {
    u.lastModified = new Date();
    return u;
  });
```

## Mathematical Functions ( Pure Functions)

Functions that with the same input always return the same output. They don't deppend in any other data other than what is passed to the funtion and don't alter dataother than what they  returned

## Mutable data
Mutable data is data that can be change.
An example will be to order an array. If we have an unorder array and we create a function that shorts that array if the function return a new array with the shorting this will be unmutable data because we did not change the original array, but if the function takes our initial array and modify it then the data is mutable and we will loose the original reference of the array and we can have side effects



## Working with array Functions
```javascript
  // Returns the value of the first element in an array that pass a test
  users.find((u) => {
    return u.id === id;
  });
  // Checks if every element in an array pass a test
  users.every((u) => {
    return u.isAdmin;
  });
  // Checks if any of the elements in an array pass a test
  users.some((u) => {
    return u.isAdmin;
  });
  // Creates a new array with every element in an array that pass a test
  users.filter((u) => {
    return u.isAdmin;
  });
  // Creates a new array with the result of calling a function for each array element
  users.map((u) => {
    u.updated = new Date();
    return u;
  });
  // Reduce the values of an array to a single value (going left-to-right)
  users.reduce((accumulator, n) => {
    return accumulator + n
  }, 0);
```

## Chaining

Exercise: For a given array of numer we what to:
 1) reduce every value by 1.
 2) summ all resulting  values that are divisible by 3

 Solution:

 <b>IMPERATIVE</b>
```javascript
// given array
let numbers = [2,4,10,12,19,23];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] - 1;
  if (numbers[i] % 3 == 0) {
    sum += numbers[i];
  }
}

console.log(sum)  // sum = 30;
```

<b>DECLARATIVE</b>
```javascript
  // given array
  // given array
let numbers = [2,4,10,12,19,23];

let substractOne = n => n-1;
let isDivisbleBy3 = n => n % 3 === 0 ? n: null;
let add = (n,i) => n + i;

let sum = numbers.map(substractOne)
          .filter(isDivisbleBy3)
          .reduce(add, 0);

console.log(sum)  // sum = 30;

```


## Currying
Convert a function that accepts multiple parameters into a series of functions that each  only take  1 parameter  

Let's see an example: <br>
```javascript
  // starting from
  users.find((u) => {
    return u.id === id;
  });

// now we could do soomethig like:

const byId = (item) => {
  return item.id === id;
}

users.find(byId)

// the problem with the above code is that id will be undefined since we need 2 params and we are passing only one

// the solution will be a function that returns another function
const byId = (id) => {
  return (item) => {
    return item.id === id;
  }
}

users.find(byId(2))

// So this also means that you could use byId in any place and you can call it like:
byId(2)(users)

// Ramda has a curry function that does currying

const byId = R.curry(id, item) {
  return item.id === id;
}

users.find(byId(2))

// also de advantage of using the R.curry funtion is that it accepts more than 2 parameters
// for example:

const add = R.curry((a,b,c,) => {
  return a + b + c;
})

add(1)(2)(3);


```

This is another example

```javascript

const convertUnits = (toUnit, factor, offset = 0) => input =>
((offset + input) * factor).toFixed(2).concat(toUnit);

const milesToKm = convertUnits('km', 1.60936, 0);
const poundsToKg = convertUnits('kg', 0.45460, 0);
const farenheitToCelsius = convertUnits('degrees C', 0.5556, -32);

milesToKm(10); //"16.09 km"
poundsToKg(2.5); //"1.14 kg"
farenheitToCelsius(98); //"36.67 degrees C"

const weightsInPounds = [5,15.4,9.8, 110];

// without currying
// const weightsInKg = weightsInPounds.map(x => convertUnits('kg', 0.45460, 0)(x));

// with currying
const weightsInKg = weightsInPounds.map(poundsToKg);
// 2.27kg, 7.00kg, 4.46kg, 50.01kg
```


## Partial application

Supplying less arguments than required





Bibliography:<br>
Wikipedia: https://en.wikipedia.org/wiki/Functional_programming <br>
Pluralsite video:  [(Fundamentals of Functional Programming in JavaScript by Nate Taylor)](https://app.pluralsight.com/library/courses/javascript-functional-programming-fundamentals/exercise-files)<br>
w3School: [JavaScript Array Reference](https://www.w3schools.com/jsref/jsref_obj_array.asp)
