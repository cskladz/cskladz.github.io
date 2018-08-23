#!/usr/bin/env node

'use strict';

//Using the JavaScript language, 
//have the function TimeConvert(num) take the num parameter
    //and return the number of hours and minutes the parameter converts to 
    //(ie. if num = 63 then the output should be 1:3). 
    //Separate the number of hours and minutes with a colon. 
function timeConvert(minutes){
    //have hour equal the the total number of whole numbers when dividing
    //by 60. Round down to the nearest whole number.
    let hour = Math.floor(minutes/60);
    //have minutes be the remainder of minutes / 60
    let minute = (minutes % 60);
    //return hour 'colon' minutes
    return hour + ":" + minute;
}
    
console.log(timeConvert(124));    
    