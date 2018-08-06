#!/usr/bin/env node

'use strict';

//Chapter 3

//Minimum
    //write a function (similar to math min) that returns the smallest argument
    
var min = (a,b) => a !== b && a < b ? a : b; 
console.log(min(0,10));
console.log(min(0,-10));

//Recursion

    //Determine if a postive whole number is even <or odd> without dividing  by 2 or using %remainder
    
    //we are going to use a recursive function that counts up from 0 and from 1 by 2, checking if any match the positive whole number
        //if we get a match from the 0 side we return even vice versa for oppsite
        
        
function isEven(num){
    function find(current){
        if(current === num) return true;
        else if(current>num) return false;
        else return find(current+2);
        
        //(odd == num) ? "odd" : find(even+2,odd+2);
        //(even == num) ? "even" : find(even+2,odd+2);
    }
    return find(0);
}
console.log((isEven(30490)));


//Bean Counter