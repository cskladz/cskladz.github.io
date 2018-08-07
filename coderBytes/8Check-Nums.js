#!/usr/bin/env node

'use strict';

// Challenge
// Using the JavaScript language, 
// have the function CheckNums(num1,num2) take both parameters being passed and 
//     return the string true if num2 is greater than num1, 
//     otherwise return the string false. 
//     If the parameter values are equal to each other then return the string -1. 
function CheckNums(num1,num2){
    var result;
    if(num1 === num2) return -1;
    num2 > num1 ? result = true : result = false;
    return result;
}
console.log(CheckNums(6,8));