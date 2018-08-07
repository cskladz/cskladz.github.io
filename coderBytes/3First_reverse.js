#!/usr/bin/env node

'use strict';
//Using the JavaScript language, have the function FirstReverse(str)
//take the str parameter being passed and return the string in reversed order. 
//For example: if the input string is "Hello World and Coders" 
    //then your program should return the string sredoC dna dlroW olleH. 
//
//
//
function FirstReverse(str){
    var result= "";
    var inputArr = str.split("");
    var outputArr = [];
    //now that we have an arrary with a letter at each index
    //we can make two loops, both counting up
    //assigning the last index of the input string to the first index of the....
        //or we could just push everything into the back of an array and then join it all   
    for(var i = 0; i <inputArr.length; i++){
        outputArr.unshift(inputArr[i]);
    }
    result = outputArr.join("");
    return result;
}
console.log(FirstReverse("Hello World and Coders"));