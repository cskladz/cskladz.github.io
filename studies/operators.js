/*
Operators
Operators are symbols we use to act on data. One way to divide them into 
catergories is to consider how many values the symbols used are operating on.
We have Unary (1), Binary (2), and Ternary (3).
Because the vast majority of operators we use are essentially binary this 
distinction doesn't effectively clarify the topic for us. First, we will 
cover Unary and Ternary, then explore the more distinctive aspects of Binary 
operators.

Unary operators act on one value or expression.
*/
var obj = {key1: 'hello world', key2: 12}
var numString = '10'; 
var num = 10; 
var boo = true;
console.log(typeof num); //returns its datatype as a string.
console.log(typeof boo);
-(num);//this will switch the value of num to negative if positive or vice versa
+(numString); //this will turn value into a number datatype.
console.log(!(boo));//the 'bang' operator will coerce the opposite Boolean value
delete obj.key2; 
console.log(obj);
/*
The Ternary operator, because there is only one, is also know as the 
conditional operator and takes three operands like this if statement:
    (a ? b : c)
The first part, a, is a coerced Boolean value indicated by it being left of the 
?. 'b,' the first expression after the ? Is the value returned if true and 
separated from the last expression by a colon which will returned c if false.


Binary operators fall into several other categories that better distinguishes 
them. Increment and decremented operators may seem to be unary because they act
on one value, but actually they are just short hand for arithmetic which 
requires two value to perform an operation (even if its just the same value 
like x^2)
*/
var x=0;
x++; 
x = x + 1;
x += 1; 
/*
These three lines of code all do the exact same thing. They add one(1) to the 
value of x. The same is true for the inverse with subtraction:
*/
x--;
x = x - 1;
x -= 1;
/*
Assignment operators
They are used to attribute a reference to a value in a variable. In simpler 
terms they are used to store value in things.
*/
var example;  //is the declaration stage
example = 10;//by using the equal sign operator we assign value to the variable
/*
(=) - Assignment operator.
(*=) -Multiplication assignment.
(/=)  -Division assignment.
(%=) -Remainder assignment.
(+=) -Addition assignment.
(-=) -Subtraction assignment
*/
var y = 0;
y += 10;
console.log(y); // → 20
/*
Arithmetic operators
These are the commonly understood mathematical symbols of "+", "-", "/", and 
"*" These operators will always attempt to resolve into an expression when they
are met. Two lesser known arithmetic operator are the remainder, or modulus,
“%” and “**” for exponents (to the power of). The standard PEMDAS rules apply 
so using parenthesis can help one ensure arithmetic is done is the desired order.

Comparison operators
Comparison operators will resolve to a Boolean expressions. We can use (<), (>),
(>=), (>=) or (in) to get a Boolean result of a specific relation between two 
variables. “Is x greater than y?” “Is y greater than or equal to z?” “Is a 
specific property ‘in’ a specific object?” If we want to determine if two values
are equal or not equal we can use === or !== respectively.

Logical operators
Logical operators include "&&" (and), "||" (or). They are used on two Boolean 
expressions or values. The && operator returns true if the values on both sides
resolve to true Boolean expression, if either side is false the whole operation
will return false. || (or) on the other hand, executes from left to right and 
returns true if either one resolves to true. If the expression on the left side
is true the expression on the right side will be skipped over and not evaluated.
All of these operands are used to control the flow of meaning in and through 
our variables throughout our code.
*/
