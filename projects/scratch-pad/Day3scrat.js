#!/usr/bin/env node

'use strict';

var greeting = 'Welcome to Operation Spark';
console.log(greeting);


/*
function createGreaterThanF(base){
    return function (value){
        if(base > value) return true;
        if(base <= value) return false;
        else console.log("hmmm")
    }
}

var lessThan7 = createGreaterThanF(7);
console.log(lessThan7(10));

*/

var object ={ keyA:"1",
              keyB:"2",
              keyC:"3"}

 var outputArr = Object.values(object);
 console.log(outputArr);