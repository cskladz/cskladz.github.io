// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//for loop that prints values 1-100 i
    for(var i=1; i <= 100; i++){
        
//will need to do else if statements....
    
    //check if remainder of i when divided by 3 is 0
        if(i%3 === 0 && i%5 === 0){
        //print Fizz
        console.log("FizzBuzz");
        //resultArray.push("Fizz");
        }
    //check if remainder of i divided by 5 is 0
        else if (i%3 === 0){
        //print buzz
        console.log("Fizz");
        //resultArray.push("Buzz");
        }
    //check if reaminder of i divided by 3 and i divided by 5 is 0
        else if(i%5 === 0){
        //print FizzBuzz
        console.log("Buzz");
        //resultArray.push("FizzBuzz");
        }
    //else
        else{
        //print i
        console.log(i);
        //resultArray.push(i);
        }
     
    }
   
   //console.log(resultArray);
   //resultArray.stdin.on();
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}