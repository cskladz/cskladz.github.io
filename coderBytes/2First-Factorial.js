#!/usr/bin/env node

'use strict';

// Challenge
// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed
    //return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). 
    //For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
    
function firstFactorial(num) {

//think of a recursive function that could multiply N by N-1 and then by N-2 and then by N-3, 
//if we keep feeding the result of the multiplcation back into the function to be multiplied
//by num - i; with i going to zero....we should have out solution.

var factorial =
    function(sum){
        for(var i = 1; i < num; i++ ){
            sum *= num-i;
        }return sum;
    };
return factorial(num);
}

console.log(firstFactorial(8));