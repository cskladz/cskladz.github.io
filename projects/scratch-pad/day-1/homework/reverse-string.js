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
    console.log(typeof input);
    // YOUR CODE GOES BELOW HERE //
        //We want to only accept string input//
  if( typeof input === 'string'){
    //make each character/element in the string seperate indexes in an array//
    var inputArr = input.split("");
    //set index[0] of new 'array-ed' string  equal to the last index // input.length-1 //
    var outputArr=[];
        //set outputArr[x] = inputArr[y]
      //we want x to start at 0 and count up (x++) until it reaches inputArr.length
      //we want y to start at .length -y (ie.5) and count up (y++)
    var i=0;
    var x=1;
    do {
      outputArr[i]=inputArr[inputArr.length-x];
      i++;
      x++;
    }
    while(i<=inputArr.length);
    //convert out new array back into a string a return it
    var outputStr =outputArr.join("");
    //return outputStr;
    console.log(outputStr);
    return outputStr;
    }
    else return "this is not a string";
    // YOUR CODE GOES ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}