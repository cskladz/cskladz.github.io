#!/usr/bin/env node

'use strict';

var greeting = 'Welcome to Operation Spark';
console.log(greeting);
var object1 = {
  a: 'somestring',
  b: "another string",
  c: "stringc"
};
//console.log((object1.length));
/*console.log(object1);
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
for(var keys in object){
    console.log(object[keys]);
    //console.log(object);
    //var outputArr =+ Object.object[keys];
    //console.log(Object.object[keys]);
   //console.log(outputArr);
   console.log(Object.keys(object));
}
  
  
  // YOUR CODE ABOVE HERE //
}
console.log(printObjectValues(object1));
//console.log(Object.basicObj);
*/

/*  var output;
  console.log(object1.length);
  for(var key in object1){
    console.log(object1[key], key);
    output = (object1[key] + key);
    console.log(output);
  }
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  for(var key in object){
    console.log(key)
  }

  
  // YOUR CODE ABOVE HERE //
}
//console.log(Object.keys(object1).length);
//console.log(object1[(Object.keys(object1).length-1)]);
*/

/*var keyString =[];
for (var i in object1){
     keyString.push(i);
}
console.log(keyString);
var x=0;
while (keyString.length-x >= 0){

console.log(object1[keyString[x]]);
x++;
}*/

var basicNumObj = {1:1,
                2:2,
                3:3
    };
var basicStrObj = {oneS:'one',
                   twoS:'two',
                   threeS:'three'
                   };

function printObjectValuesInReverse(object) {
  var x = 0;
  var y = Object.keys(object).length;
  var inputArr = [];
  var outputArr;
  for (var key in object){
   inputArr.push(object[key]);
  //}
    console.log(inputArr);
  
  
  
  }
  // YOUR CODE BELOW HERE //
//if we call the keys in reverse order the values will print in reverse order
 //console.log("values before loop",Object.values(object));
 //var outputArr = Object.values(object);
  //console.log(-(Object.values(object)));
  
  //for( var i = outputArr.length-1; i >= 0; i--){
    //console.log(outputArr[i]);
 // }
  
  
  // YOUR CODE ABOVE HERE //
}
printObjectValuesInReverse(basicNumObj);