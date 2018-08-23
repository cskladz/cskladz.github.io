#!/usr/bin/env node

'use strict';

//Using the JavaScript language, 
//have the function AlphabetSoup(str) take the str string parameter
        //return the string with the letters in alphabetical order 
        //(ie. hello becomes ehllo). 
        //Assume numbers and punctuation symbols will not be included in the string. 
        
function alphabetSoup(str){
    var input = str.split("");
    input.sort();
    input = input.join("");
    return input;
}
console.log(alphabetSoup("hello world"));