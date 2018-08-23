#!/usr/bin/env node

'use strict';

//Looping a Triangle
    //Make a loop that prints seven lines each line with an extra # 
    
var string = "#";
//going to make a loop that console.logs <string> and then adds another # to <string>

for (var i =0; i < 7; i++){
    console.log(string);
    string += "#";
}




//FizzBizz
for(var i=1; i <= 100; i++){
    if(i%3 === 0 && i%5 === 0){console.log("FizzBuzz");}
    else if (i%3 === 0){console.log("Fizz");}
    else if(i%5 === 0){console.log("Buzz");}
    else{console.log(i);}
}


//Chessboard


    //make two loops
    //first loop makes a string finishes with /n
    //second loop starts the first loop again
    //in order to alternate we can check if the iteration is even or odd
var board ='';
    for(var x = 0; x<8;x++){
        for(var y =0; y<8;y++){
            if((x+y)%2 === 0){board += ' ';}
            else board += '#';
        }
        board += "\n";
    }
console.log(board);
    //instruction:
    
    //make a string equal in length to the number of times called with oscilating characters
    //add this string with a new line \n to result
    //if loop is on odd count start string with x
        //else start string using y
    

