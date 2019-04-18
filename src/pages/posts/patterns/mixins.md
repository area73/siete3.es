---
title: "Mixins"
date: 2018-11-18
tags: ["design patterns", "mixins", "functional mixins", "hinerance"]
categories: ["design patterns"]
draft: false
path: "patterns/mixins"
---

In JavaScript we can only inherit from a single object. There can be only one **[[Prototype]]** for 
an object.
 And a class may extend only one other class.

**To solve the use of multi inheritance we use mixins**.

In object-oriented programming languages, a Mixin is a class that contains methods for use by 
other classes without having to be the parent class of those other classes.

A mixin can also be viewed as an **interface with implemented methods**. 
This pattern is an example of enforcing the [**dependency inversion principle**](https://en.wikipedia.org/wiki/Dependency_inversion_principle). 

## Inheriting "methods"
JavaScript does not have methods in the form that class-based languages define them.
**In JavaScript, any function can be added to an object in the form of a property**. 
An inherited function acts just as any other property, including property shadowing

There is more than one type of prototypal inheritance:

  * **Delegation** (i.e., the prototype chain).
  * **Concatenative** (i.e. mixins, `Object.assign()`).
  * **Functional** (Not to be confused with functional programming. A function used to create a 
  closure for private state/encapsulation).
  
Each type of prototypal inheritance has its own set of use-cases, but all of them are equally 
useful in their ability to enable composition, which creates **has-a** or **uses-a** or **can-do** 
relationships as opposed to the is-a relationship created with class inheritance.

## Delegation
We can work with delegation by using apply, bind or call to inherit from another object. Let's 
see an example: <br>

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

<a href="{{< ref "testing-protoype-inheritance.md" >}}" target="_blank">This is another "tricky" 
example </a>


## Concatenative

**Using Object.assign() as mixin**

```javascript
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
const User = function(name) {
    this.name = name;
};

// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
```

**or if you were using classes you could do something like this:**

```javascript
class User extends Person {
  // ...
}

Object.assign(User.prototype, sayHiMixin);
```

###Functional Mixins

If the functions defined by mixins are intended solely for the use of other objects,
 why bother creating mixins as regular objects at all? Put another way, a **mixin should be a 
 process not an object**.
  
 The logical conclusion is to make our mixins into functions into which consumer objects inject 
 themselves by delegation, thus cutting out the middle guy (the extend function) entirely.
 
```javascript
var asCircle = function() {
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };
  this.grow = function() {
    this.radius++;
  };
  this.shrink = function() {
    this.radius--;
  };
  return this;
};
 
var Circle = function(radius) {
    this.radius = radius;
};

asCircle.call(Circle.prototype);

var circle1 = new Circle(5);
circle1.area(); //78.54
```
**Mixins as verbs instead of nouns**

### Adding Options

This functional strategy also allows the borrowed behaviours to be parameterized by means of 
an options argument. 
```javascript
var asOval = function({growBy, shrinkBy}) {
  this.area = function() {/* ... */};
  this.ratio = function() {/* ...*/};
  this.grow = function() {
    this.shortRadius += (growBy/this.ratio());
    this.longRadius += growBy;
  };
  // ...
  return this;
}
 
var OvalButton = function(/*...*/) {
  //...
};
// ...
asOval.call(OvalButton.prototype, {growBy: 2, shrinkBy: 2});
```


**Further reading [Traits](https://github.com/traitsjs/traits.js)**
 
 

Bibliography: <br>
[Angus Croll](https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/?blogsub=confirming%23subscribe-blog]) <br/>
[javascript.info](https://javascript.info/mixins)<br/>
[Wikipedia](https://en.wikipedia.org/wiki/Mixin)<br/>
[Eric Elliott](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)<br/>
[developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)<br/>
