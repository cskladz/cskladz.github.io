#!/usr/bin/env node

'use strict';

var greeting = 'Welcome to Operation Spark';
console.log(greeting);


function reverseString(input) {
    console.log(typeof input);
    // YOUR CODE GOES BELOW HERE //
    //We want to convert input to a string//
    //console.log(input.toString());
    //var inputStr = input.toString();
  if( typeof input === 'string'){
    //make each character/element in the string seperate indexes in an array//
    var inputArr = input.split("");
    //console.log(inputArr);
    //console.log(inputArr.length-1);
    //set index[0] of new 'array-ed' string  equal to the last index // input.length-1 //
    //console.log(inputArr[2]);
    var outputArr=[];
    //outputArr[0]=inputArr[inputArr.length-1];
    //console.log(inputArr[inputArr.length-1]);
    //console.log(outputArr);
    var i=0;
    var x=1;
    do {
      //console.log("Loop #: ", x, outputArr);
      outputArr[i]=inputArr[inputArr.length-x];
      i++;
      x++;
    }
    while(i<=inputArr.length);
    var outputStr =outputArr.join("");
    //return outputStr;
    //set outputArr[x] = inputArr[y]
      //we want x to start at 0 and count up (x++) until it reaches inputArr.length
      //we want y to start at .length (ie.5) and count down (y--) until it reaches zero
    console.log(outputStr);
    return outputStr;
    }
    // YOUR CODE GOES ABOVE HERE //
}
console.log(reverseString("hello"));