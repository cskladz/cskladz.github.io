#!/usr/bin/env node

'use strict';

// Challenge
// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed 
// and modify it using the following algorithm. 
//     Replace every letter in the string with the letter following it in the alphabet 
//         (ie. c becomes d, z becomes a). 
//     Then capitalize every vowel in this new string (a, e, i, o, u) 
//     and finally return this modified string. 

//have alphabet array so that alphabet[i+1] makes sense
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var A = alphabet[0].toUpperCase();
var E = alphabet[4].toUpperCase();
var I = alphabet[8].toUpperCase();
var O = alphabet[14].toUpperCase();
var U = alphabet[20].toUpperCase();

function LettersChange(str){
    //convert string to an array with letters that match our alphabet array
var inputArr = str.toLocaleLowerCase();
   inputArr = inputArr.split("");
   //iterate over our new string array
   for(var i =0; i<inputArr.length; i++){
       //check indexOf occurence set equal to alphabet[i+1]
    var returnedIndex = alphabet.indexOf(inputArr[i]);
    if(returnedIndex === 25) inputArr[i] = alphabet[0];
    if(returnedIndex !== -1){
        inputArr[i] = alphabet[returnedIndex + 1];
        if(inputArr[i] === alphabet[0]) inputArr[i] = A;
        if(inputArr[i] === alphabet[4]) inputArr[i] = E;
        if(inputArr[i] === alphabet[8]) inputArr[i] = I;
        if(inputArr[i] === alphabet[14]) inputArr[i] = O;
        if(inputArr[i] === alphabet[20]) inputArr[i] = U;
       //check indexOf inputArr[0]
   }
   } 

return inputArr.join("");
   
}
console.log(LettersChange("Argument goes here"));