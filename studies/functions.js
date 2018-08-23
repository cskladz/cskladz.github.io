/**
 * Functions will make up the back-bone of your program. In a sense functions 
 * can be thought of as little mini programs in their own right. As we develop
 * solutions to more complex problems a lot of it will be the piecing together
 * of smaller functions; much like how gears in a clock are meticulously aligned
 * to act out a greater part and the use pulleys and levers to apply force with
 * a sum greater than our own individual strength. 
 * 
 * In a basic sense, functions are just reusable pieces of code that have a 
 * defined behavior to perform a specific action or become a certain value.
 * Another benefit to writing a piece of code once vs writing it out every 
 * single time you need it to run, is that it lends itself to fewer mistakes.
 * If we are writing a piece of code one time, and can insure than it works 
 * then, we shouldn't have to worry about it again after that.
 * 
 * There are two phases to using functions. The first phase is referred to as
 * the declaration phase. It is within this phase that we define what we would
 * want our program to do when it is run. 
 * 
 * The standard syntax for a function declaration as follows:
 * */

function sampleFunction(parameter1, parameter2){
    //code block to execute;
    console.log(parameter1 + parameter2);
}
function funcWithReturn(par1, par2){
	return  (par1 + par2); 
}
		
/**
 *Here we see the function keyword, recognized similarly to the ‘if’ and ‘for’
 * from the previous sections followed by its named identifier. Proceeding this
 * are a set of parenthesis containing the functions parameters. It may help to
 * understand these parameters as variables to be used in our function. These
 * parameters are used inside our function to describe hypothetically what we
 * would want to happen to these if they were actual values. 
 * 
 * After our parameters we have an open curly brace which will define our 
 * ‘scope’  in which our function will run and variables exist. If we are
 * expecting our function to resolve to some value to be used where it it is 
 * being invoked, we must state that is with a return statement. Sometimes we 
 * may just want our functions to cause some effect on something else and 
 * therefore needn't return anything at all and just have an action in its body.
 * 
 * Our function will just sit here until we make a request, or call it to run 
 * in our program. When we want our function to execute, a different series of
 * events take place than when we define it. This phase is referred to as
 * invoking or calling a function and can be done as simply as follows:
**/
sampleFunction('Wu','Wei');  
/**
 * Notice the difference in the amount of code. Also we have specific values
 * inside our parenthesis. When declaring a function only parameters are used,
 * however when the function is called with specific values in the parenthesis, 
 * these known become known as arguments, and the function will act with these
 * values in place of the parameters. Functions are extremely dynamic they don’t
 * “HAVE’ to take input parameters, and they don’t ‘HAVE’ to return anything. If
 * we do decided to do a return, keep in mind only one value can be returned.

 * As we will see further on, a value in JavaScript can become quite a complex and
 * detailed thing. In some cases it may even be another function. This can have
 * some important benefits. Sometimes, we can have a function that has another
 * function as its return and an interesting thing can happen.
 * 
 * Say, for example we define a variable in the beginning of one function, and
 * then define an action to it in form of a function in the return…
**/
function closureExample() {
	var count = 0;
	return function(){
		return count +=1;
	};
}
var closureCount  = closureExample();
console.log(closureCount);
closureCount();
console.log(closureCount());
console.log(function(){return count +=1;});
/**
Notice how count is never declared or defined inside of that function.
Naturally it would leave one to assume after we take it out and put it into our
variable closureCount it would read undefined as it does in our last
console.log. But actually, that returned function retains its access to all 
the variables in its entire scope chain where it was declared. If we assign
closureExample() to another variable it will actually have its own separate
scope chain in which count is defined.

There are a few other nifty ways of declaring a function: function expressions
and its ES6 simplified notation, and immediately invoked functions. Function
expressions are created by assigning a function to a variable. For example,
**/

var funcExpression = function(parameters){ /*code to execute*/ };
var es6Notation = (parameters) =>{/*code to execute*/};

/**
Whoa! Talk about short, and notice how much easier it would be to debug? An
important distinction between these two is that in ES6 notation the return is 
implied with the preceeding arrow statement. Also important to remember, this
type of declaration works slightly differently compared to using our function
keyword due to a property in JavaScript called hoisting. When our code is 
complied, the very first thing the compiler does is scan through our code
looking for a few specific keywords, ‘var’ and ‘function’ for example, 
and hoists them to the very beginning of the code before the compiler 
actually executes our code top to bottom line by line.  
Var gets its named identifier hoisted but not any assignment that may be
attached to it.While functions declared with the keyword will be known to exist
anywhere in our program because they have actually been run first and are 
hoisted with their attached code block.

‘Immediately Invoked Function Expressions’ are function that are declared and
then immediately called on to run following its declaration by putting a set of
parenthesis afterwards. Note the entire function declaration must be put in 
parenthesis (think PEMDAS), so really it ends up like (f)(); with f being the 
action desribed and () telling it to run.
**/

(function immedInvoked(){
    console.log('WuWei');
})();