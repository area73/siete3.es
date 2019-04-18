---
title: "combinators"
date: 2019-01-10
tags: ["declarative", "Pure functions","Inmutable","currying", "combinator"]
categories: ["Functional"]
path: "functional/combinators"
draft: false
---

# Combinators
A combinator are higher-order , **pure functions** that doesn't have any **free variable** and 
can combine primitive artifacts like other functions (or other combinators) and behave as control logic.

**Free variables** are just simple variables in the context of a function that aren't explicit  
pass in as argument. 

Our commitment is that all dependencies are pass by parameter.

Combinators unlock freedom and facilitate point-free programming. 
Because combinators are pure, they can be composed into other combinators,
providing an infinite number of alternatives to express and reduce the complexity of writing
any type of application.

For example a composer function will be a combinator:

```javascript
const compose = (f,g) => x => f(g(x)); 

const addTwo = x => x + 2;
const multByTree = x => x * 3;

const operator = compose(addTwo,multByTree);

console.log(operator(7)); // 23
// NOTE: remember that  compose will execute from right to left

```
In Ramda there are many combinators that we can use:
 * compose
 * pipe
 * identity 
 * tap
 * alternation
 * sequence
 * fork (join)


## identity
The identity combinator is a function that returns the same value it was provided as an argument:

`identity :: (a) -> a`

It’s used extensively when examining the mathematical properties of functions, 
but it has other practical applications as well:

 * Supplying data to higher-order functions that expect it when evaluating a function argument. 
 * Unit testing the flow of function combinators where you need a simple function result on which 
  to make assertions. 
 * Extracting data functionally from encapsulated types.

## Tap
tap is extremely useful to bridge void functions (such as logging or writing a file or an HTML page) 
into your composition without having to any create additional code. It does this by passing itself 
into a function and returning itself. Here’s the function signature:

`tap :: (a -> *) -> a -> a`

## Alternation  [OR - combinator] 
The alt combinator allows you to perform **simple conditional logic** when providing default 
behavior in response to a function call. 
This combinator takes two functions and returns the result of the first one if the value is 
defined (not false, null, or undefined); otherwise, it returns the result of the second function.

## Sequence (S-combinator) 
The seq combinator is used to loop over a sequence of functions. It takes two or more functions 
as parameters and returns a new function, which runs all of them in sequence against the same value.

The seq combinator doesn’t return a value; it just performs a set of actions one after the other.

## Fork (join) combinator
The fork combinator is useful in cases where you need to process a single resource in two 
different ways and then combine the results.

<br><br>
Bibliogrphy:<br>

* Functional Programming in JavaScript . Ed: MANNING SHELTER ISLAND. Author: Luis Atencio.<br>
* [Mostly Adequate Guide to functional programming](https://drboolean.gitbooks
.io/mostly-adequate-guide-old/content/). 
Professor Frisby's<br>
* [Building a declarative app using Functional javaScript](https://www.packtpub.com/web-development/building-declarative-apps-using-functional-javascript-video).
 Michael Rosata	
