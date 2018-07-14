// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //We want to convert input to a string//
    console.log(input.toString());
    var inputStr = input.toString();
    //make each character/element in the string seperate indexes in an array//
    var inputArr = inputStr.split("");
    console.log(inputArr);
    console.log(inputArr.length-1);
    //set index[0] of new 'array-ed' string  equal to the last index // input.length-1 //
    console.log(inputArr[2]);
    var outputArr=[];
    outputArr[0]=inputArr[inputArr.length-1];
    console.log(inputArr[inputArr.length-1]);
    console.log(outputArr);
    //var outputStr
    //return outputStr;
    //set outputArr[x] = inputArr[y]
      //we want x to start at 0 and count up (x++) until it reaches inputArr.length
      //we want y to start at .length (ie.5) and count down (y--) until it reaches zero
    return;
    // YOUR CODE GOES ABOVE HERE //
}

    //TESTING //
    console.log(reverseString("hello"));
    


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}