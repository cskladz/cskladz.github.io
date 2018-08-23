#!/usr/bin/env node

'use strict';
// Challenge
// Using the JavaScript language, 
// have the function SimpleSymbols(str) take the str parameter being passed and 
//     determine if it is an acceptable sequence 
//     by either returning the string true or false. 
//         The str parameter will be composed of + and = symbols 
//         with several letters between them (ie. ++d+===+c++==a) and 
//         for the string to be true each letter must be surrounded by a + symbol. 
//         So the string to the left would be false. The string will not be empty and will have at least one letter.
        
// //check string to see if all letter have a plus sign next to them. if not, result is false.

//iterate over our string, turning it into an array will allow us change the elements of the string more easily
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function simpleSymbols(str){
    var setFlag = false;
    var inputArr = str.split("");
    for(var i = 0; i<inputArr.length; i++){
        if(alphabet.includes(inputArr[i]) && (inputArr[i-1] !== "+" || inputArr[i+1] !== "+")){
            return false;
        }
        else if(alphabet.includes(inputArr[i]) && inputArr[i-1] === "+" && inputArr[i+1] === "+"){
            setFlag = true;
        }
    }
        //need to check for letters in the alaphabet
        //if array element is letter AND the index -1 is a "+" AND inedx +1  is a "+""
        //for all letters....return true, else false;
    
return setFlag;    
}
console.log(simpleSymbols("+d+=3=+s+"));