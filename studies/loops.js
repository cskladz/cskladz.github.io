/**
 * Explain while, for, and for-in loops
 * 
 * loops are used to 'iterate' over something while certain conditions persist or for a specified number of times.
 * while loops are good for setting a conditional end.
 * while (a<b){
 *  console.log("a is less than b");
    a++;
 }
 it is very important to remember to put a counter inside, or some other way to make sure your conditions are met otherwise there will be a continous loop that will eat resources until the compilers crashes
    although most programs have stops built it to catch foreverloops it will break your program.
 * 
 * Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
 * by using a counter we can determine how many times we want a code to execute.
 * the syntax in javascript for declaring a for loop is as follows:
 * for(statement;expressional conditional;increment)
 * for(var counter = 0; counter < 10; counter++){
     code to execute
 }
 with a negative increment we can count backwards as such:
 for(var counter = 10; counter > 0; counter--){
     code to execute
 }
 * Loop over an Array, forwards and backwards
 * 
 * by taking advantage of the zero-index nature of arrays and the dynmaic nature of the .length method we can use for loops to loop through all the indexes in an array:
 * for(var counter = 0; counter < array.length; counter ++){
     array[counter];
 }
    the first time this loop is run, array[0] will be expressed
    the second time, array[1] and so on up until the last index of the array, which is always 1 less than the length method returns.
    
 * Loop over an Object
 * javascript has a nifty built in contrsuct refered to as for in loops
 * becuase objects are non-orders the intergar based looping is rather difficult. fortunately. by using
 * 
 * for(var key in object){
 * console.log(object[key]);
 * console.log(key);
 * }
 * this code will print all the values attached to all the keys in the object followed by all name of all the keys.
 * key being an artibratryly named varibale (in this case key for clarity) in is a reserved keyword like for, function, if; and object is the object that you want to iterate through
 * 
**/
