#!/usr/bin/env node

'use strict';
// Challenge
// Using the JavaScript language, 
// have the function LetterCapitalize(str) take the str parameter being passed and 
//     capitalize the first letter of each word. 
//     Words will be separated by only one space. 


function LetterCapitalize(str){
    
    var inputArr = str.split("");
    //console.log(inputArr);
    for(var i = 0; i < inputArr.length; i++){
        inputArr[0] = inputArr[0].toUpperCase();
        if(inputArr[i] === " ") inputArr[i+1]=inputArr[i+1].toUpperCase();
    }
    return inputArr.join("");
}
var result = LetterCapitalize("Now is the time for all good men to come to the aid of their country");
console.log(result);