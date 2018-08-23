/**
 * Loops are the our first introduction of computational work. Now that we have
 * a basic vocabulary with which to write and declare values its time we put 
 * that to some kind of use. Say we wanted to console.log something ten times.
 * Sure we could write out 10 lines of code....but aren't computers supposed to
 * make things easier? ...particularly repetitive things...? The answer is Yes!
 * Of course there is a better way we can use a loop.
 * 
 * Loops are used to 'iterate' over something while certain conditions persist 
 * or for a specified number of times. The most popular kind of loop is the 
 * 'for loop.' With for-loops we are able to iterate over a piece of code any 
 * number of times. Of course these loops need limits or they would end up being
 * called for'ever' loops. Loops need some kind of limit, or condition, which 
 * the compiler recognizes as a cue to cease executing the loop. Limits can be a
 * set in a wide variety of ways, forward counting up to some limit, backward 
 * counting down to another number. We can even set the limit dynamically. For
 * example, if we were setting a numbered limited within a for-loop we can use a
 * variable which can be changed or determined by another outside factor.
 * 
 * The syntax in JavaScript for declaring a for loop is as follows:
 * for(statement; expressive condition; increment)
 **/
  for(var counter = 0; counter < 10; counter++){
        console.log('Wu Wei');
    }
/**    
 With a negative increment we can count backwards as such:
**/
 for(var counter = 10; counter > 0; counter--){
     console.log("Wu Wei");
 }
 /**
 * By taking advantage of the zero-index nature of arrays and the dynamic 
 * nature of the .length method we can use for-loops to loop through all the 
 * indexes in an array. (Dynamic in the sense that we can write one 
 * specific thing that will have a different actual value depending on the 
 * context (time), in which it is executed.
 **/ 
    var array = ['W','u','W','e','i'];
    for(var counter = 0; counter < array.length; counter ++){
        console.log(array[counter]);
 }
 /**
 * The first time this loop is run, array[0] will be logged to the console. 
 * The second time, counter will be incremented by one and hence, array[1] 
 * will be logged to the console. This will continue so on up until the last 
 * index of the array, which is always 1 less than the length method returns.
    
 * Looping over an Object
 * Thinking back to the definition of objects, they are ‘a collection of 
 * non-ordered key/value pairs.’ The challenging part being, non-ordered. 
 * Fortunately, JavaScript has a nifty built in construct referred to as 
 * for-in loops. By using the keywords ‘for’ and ‘in’ we can set up a loop 
 * that will iterate through all the key/value pairs within an object as the 
 * following example illustrates:
 **/
  var object = {key1:'The', key2: 'Toa'};
  for(var key in object){
    console.log(object[key]);
    console.log(key);
  }
 /**
 * This code will print all the values attached to all the keys in the object 
 * followed by the names of all the keys. Referring to the above example, ‘key’ 
 * is an arbitrarily named variable (in this case ‘key’ for clarity). ‘in’ is a 
 * reserved keyword like 'for', 'function', or 'if'; and ‘object’ is the object 
 * that you want to iterate through.
 * 
 * So again, what about other instances in which we would want to loop but don't 
 * necessarily have a known number of times? That is where 'while' and 
 * 'do-while' loops come into play. With while loops we can set a limit that is
 * a conditional statement. Say for example, while the flag is false keep 
 * running the code, when another value is met, change the flag to true and the 
 * loop will stop. 
 **/
 var b=false;
 var a =0;
  while (b===false){
   if(a===10){
        b=true;
    }
    a++;
 }
 console.log(a);
/** 
 * A 'do-while' loop works just like the while except you can have the loop run
 * at least one time it even if the conditional is met. It is very important to
 * remember to put a counter inside, or some other way to make sure your 
 * conditions are met otherwise there will be a continuous loop that will eat 
 * resources until the compilers crashes. Although most programs have stops 
 * built it to catch ‘forever’ loops, it will break your program. 
 * 
 * For loops are great for doing the same task over and over when you know 
 * ahead of time how many times you'll have to repeat the loop. On the other 
 * hand, while loops are ideal when you have to loop, but you don't know ahead 
 * of time how many times you'll need to loop.
**/

































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
