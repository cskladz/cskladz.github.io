/*
Control Flow
What to code execute when? It would be a mess if our code was run all at once,
or in a different order each time would it not? Part of what makes a program a
program is the ability to control what code is executed when and how.

Controlling the flow is as important to a programmer as it is a plumber. Just as
the plumber has a series of tools and devices so too does the programmer have
her methods and functions to be deployed in a manner fitting to accomplish the
task.

In keeping with our plumbing analogy, a tap lets water flow or not flow through
a pipe so too does our use of conditional statements tells our program to 
execute or not execute. With the use of our keywords If, Else-if, Else, and 
Switch, Case, Break; we can execute or skip over pieces of code pieces of code
if certain conditions exist.

If statements will execute their contained code if the expression or statement
inside of it resolves to a true or 'truthy' value. Else-if requires an if and
will be checked for another true or 'truthy' value inside the proceeding
parenthesis if the preceding if statement is not true. In other words, if the
first if statement passes, the else if will be ignored.
Else statements will always execute when the if fails to pass test.
*/
var x =10;
if(x === 15){
	x = x+15;
}
else if (x === 10){
	x = 15;
}
else{
x += 1
}
console.log(x);

/*
In the above example, x is assigned a value of 10, then the compiler hits the
if statement. It check to see if indeed x is strictly equal to 15. In this case,
it is not, so noticing it has an else-if, it will attempt that next. Sure 
enough x is indeed strictly equal to 10 so we execute whatever is inside this
following code block, assigning a value of 15 to x. Because the else-if passed
as true the proceeding else statement is ignored. Try changing the value of x
to see what happens in different scenarios. 

Switch is another built in logic construct that also works off of Boolean values.
*/

var exampleItem = 'CDs';
switch (exampleItem) {
  case 'Records':
    console.log('Viynl Forever!!');
    break;
  case 'CDs':
  case 'MP3s':
    console.log('Less Pollution Purer Sound!!');
    
    break;
  default:
    console.log('Would you like to make a commemt about' + exampleItem + '?');
}
/**
Use switch instead of if when:
**You are comparing multiple possible conditions of an expression and the
  expression itself is non-trivial.
**You have multiple values that may require the same code.
**You have some values that will require essentially all of another value's
  execution, plus only a few statements.

Use if instead of switch when:
**You want to test for the truthiness of an expression.
**You only have a single affirmative test.
**You need to evaluate different expressions for each branch.
**/