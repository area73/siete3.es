---
title: "Method chaining in Javascript"
date: "2018-01-08"
tags: ["method chaining", "named parameter idiom"]
categories: ["design patterns"]
path: "method-chaining-in-javascript"
draft: false
---


# Method chaining in Javascript
from [wikipedia](https://en.wikipedia.org/wiki/Method_chaining) <br>
Method chaining, also known as named parameter idiom, is a common syntax for invoking multiple method calls in object-oriented programming languages.
 
The key to achieve this is that each method returns an object, allowing the calls to be chained together in a single statement without requiring variables to store the intermediate results.

A similar syntax is method cascading, where after the method call the expression evaluates to the current object, not the return value of the method. Cascading can be implemented using method chaining by having the method return the current object itself. Cascading is a key technique in fluent interfaces, and since chaining is widely implemented in object-oriented languages while cascading isn't, this form of "cascading-by-chaining by returning this" is often referred to simply as "chaining". Both chaining and cascading come from the Smalltalk language.

While chaining is syntax, it has semantic consequences, namely that requires methods to return an object, and if implementing cascading via chaining, this must be the current object. This prevents the return value from being used for some other purpose, such as returning an error value.

To see an example lest first define our use case:

Imagine that we have a class person that has some methods (or functions), these are:
```javascript
setName() 
setEyeColor()
setHairColor()
setHeight()
```

And this is the definition of our class

```javascript
// Definition of the class
// ------------------------
class Person {

  constructor() {
    console.log("person created")
  }

  setName(name) {
   this.name = name;
  }

   setEyeColor(eyeColor) {
    this.eyeColor = eyeColor;
      
  }
  
   setHairColor(hairColor) {
    this.HairColor = hairColor;
  }

   setHeight(height) {
    this.height = height;
  }
}
```
Now if we want to create a person and execute all methods we will do :

```javascript

// Execution
// ---------

var pers = new Person();
pers.setName("Joe");
pers.setEyeColor("blue");
pers.setHairColor("black");
pers.setHeight("1.75");

console.log(pers);
```

So far so good.

But this could be improved doing  method chaining. This way we will remove the call of pers object every time we want to execute a function of that object. 
<br/ >So our execution will be something like this:

```javascript
var pers = new Person().setName("Joe").setEyeColor("blue").setHairColor("black").setHeight("1.75");
console.log(pers);
```

Or better yet, we can apply some formating and also we don't even need to assign a var to person since we are doing method chaining , rewriting the above syntax as:

````javascript
console.log(
    new Person().
      setName("Joe").
      setEyeColor("blue").
      setHairColor("black").
      setHeight("1.75")
)
````

The problem comes now because if we execute the above sentence we will end up with a compiler error.
This is because when we create a new person, none of the methods that we previously define are returning a value, so after the first method call the compiler does not know in what object to execute the next function.

To solve this we will need to redefine our methods to return the same object, like this

```javascript
class Person {

  constructor() {
    console.log("person created")
  }

  setName(name) {
   this.name = name;
   return this;
  }

   setEyeColor(eyeColor) {
    this.eyeColor = eyeColor;
    return this;
  }

   setHairColor(hairColor) {
    this.HairColor = hairColor;
    return this;
  }

   setHeight(height) {
    this.height = height;
    return this;
  }
}
```

And now we can do method chaining.

```javascript
console.log(
    new Person().
      setName("Dina").
      setEyeColor("black").
      setHairColor("brown").
      setHeight("1.85")
);

// Person {HairColor:"brown", eyeColor:"black", height:"1.85", name:"Dina"}

```
