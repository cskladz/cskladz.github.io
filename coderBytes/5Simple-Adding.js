#!/usr/bin/env node

'use strict';

// Challenge
// Using the JavaScript language, 
// have the function SimpleAdding(num) add up all the numbers from 1 to num. 
// For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
// For the test cases, the parameter num will be any number from 1 to 1000. 

function SimpleAdding(num){
    var add = (sum) => {
        for(var i = 1; i <= num; i++){
            console.log(sum);
            return sum += i;
        }
    };
    add(num);
    console.log(add(num));
    
}
SimpleAdding(4);