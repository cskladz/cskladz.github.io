#!/usr/bin/env node

'use strict';

//Challenge
//Using the JavaScript language, have the function LongestWord(sen) 
    //take the sen parameter being passed and return the largest word in the string. 
//If there are two or more words that are the same length, 
    //return the first word from the string with that length. 
//Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) { 
//turn the sentance into an array of words
 var arr = sen.split(" ");
 var result = arr[0];
 //loop over the array and compare the length
 //if length if longer than previous element set result equal to it
 for(var i = 0; i < arr.length; i++){
     if(arr[i].length > result.length && arr[i].length !== result.length ) result = arr[i];
 }
  return result; 
         
}
   
// keep this function call here 
console.log(LongestWord("the quick brown fox jump quickly over the fence"));