/**
 * 
 * Functions are reuable peices of code. 
 * 
 * The two phases to using functions: First we must declare and define it. Next we can cause the function to execute, or invoke it, by calling its name.

The standard declaration for function is as follows:
function keyword follow by any parameters in parenthesis followed by a code block to me executed
function sampleFunction(parameter1, parameter2){
    code block to execute;
}
 * What’s the difference between a function’s parameters and arguments PASSED to a function?
when declaring a function only parameters are used
however, when the function is called with specific values in the parenthesis, 
these known become known as arguments, and the function will act with these values in place of the parameters.

we call of invoke a function like so:
smapleFunction(specificValue1, specificValue2);

by assigning a function to a variable we can make what is called a function expression
the syntax is as follow:
var function = function(parameters){ code to execute }
this works slightly different as they are not read by the intepretered the same way as a function declaration not assigned to a variable. 

 *Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
Functions take whatever inputs we specify as our parameters, by using the return keyword we can decide what will be returned.

 *Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 * 

 *Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)

 * 
 * 
 **/