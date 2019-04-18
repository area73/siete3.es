---
title: "statement branching Vs micro-branching"
date: 2018-06-06
tags: ["statement brnaching", "micro-branching strategies"]
categories: ["javascript", "functional"]
path: "statement-branching-Vs-micro-branching"
draft: false
---


## statement branching
Any construct that alters the sequence of statement execution within the global or functional scope. <br>
These include:<br>
```
if
else
switch 
for
while
```
Statements are designed to execute non-linearly. Aside from the obvious bloating effect, statement branching tends to become unintuitive as it progresses. 
    
## micro-branching 
Conditional logic contained within a statement that has no effect on the statement execution seqeunce.<br>
 The following operators facilitate micro-branching: <br>
 ```
 ternary (<cond> ? a : b)
 &&
 ||
 ```
The logic flows sequentially from top to bottom and even from left to right. There are no forks in the road. There is only one return statement and its at the bottom where we expect it. Best of all it’s short. Nothing is wasted. In fact it’s terse enough to be barely procedural at all.


Alternatives to statement branching fall into two broad categories: **micro-branching** and **no branching at all**

## Micro-branching strategies

### Guards (&&) and Defaults(||)
```javascript
//invoke callback if there is one
callback && callback();
//delay by argument or 20
delayBy(delay || 20);
//remove node from its parent
node && node.parent && node.parent.removeChild(node);
//log a test in the console id we have one
window.console && console.log('test');
```

<br>

<blockquote> Some things just have a natural place. Birds in the sky, fish in the sea and a return statement at the end of a function.</blockquote> 

<br>

Bibliography:<br>
https://javascriptweblog.wordpress.com/2010/07/26/no-more-ifs-alternatives-to-statement-branching-in-javascript/
