/*
Datatypes
    These are the 'types' of values that your variables can hold. They all have different properties and can be manipluted in different way.
    the type of data stored in a varible will determine its functionailty. certain pre-exixting methods apply to their corresponding 'data' 'types' 
Number
any integar, floating(decimal)point numbers are included. fractions are resolved as expressions when they are met and will not carry symbolic reference through any iterations of it. 

String
a group of characters, anything on your keyboard, anything in text, even number can be a string...if you put '1' or double quotes around anything it will become a string

Boolean
Booleans are values known as true or false. depending on one's interpreter the word true and false are used much like 1, 2, 3, 'a', 'b', 'c', are and will be highlighted according to the the inter's settings.
a common mistake is to put quotes around these becuase they are words, doing so turns them into strings and are understood as a completely different value.
a good example for using === vs == can be shown with some jsbin expamples using true/'true' and false/'false'

Array
and array is a zero index list. it is denoted with bracket notation:
*/
var exampleName = ['value1', value2, valueN];

/*
an array can store any datatype as an element attached to an index. in the above example if I wanted to access the 2nd value in the array would type:
*/
console.log(exampleName[1]);

/*
will pring the value of the second element store in an array. The most important thing for a user to remember is that computers start counting at zero. the first element in an array is stored at [0];
we can access the last element in an array by getting the length of the array and subtracting 1 from it (becuase it starts counting at zero).

Object

an object in javascript  in commonly described an as unordered collection of key/value pairs. much like every element in an array is attached to a specific index number, so too are the values in an object attached to a specific key.
it is denoted with curly brackets and usses a colon to attach a datatype to a string(the string is anaglous to the index in an array)
values are called by calling the name of the object and its key follow by a period or enclosed in sqaure brackets

ie*/ var exampleName = {key1:value1, key2:value2, keyN:valueN};

/*

Function
are a datatype, declared in several ways, most commonly with the keyword function followed by the name, any paramaeters youre expecting to pass in, and a block of code sectioned off with curly braces.
functions are invoked by calling their name and passing in any arguments you want.
more in details about function in the functions section.

undefined is a specifically empty data type, basically the computer is letting you know that something exists, your code is not broken, but somehwere along the way your value got lost and is being returned without meaning.
two most common places we have seen undefinded is when we are decalring a variable, but it never gets assigned any value; and when a function doesnt return anything. in both instances we will get an undefinded value.
keep in mind that although it looks and reads like a word it is not a string, and like the booleans should not be put in quotations unless you want a string value that reads undefinded, they will behave differently because they are different datatypes. 

null is a reascribed value of nothing. null is only given with an assignment operator by the programmer as is used to denoted emptiness seperate from undefinded and NaN

NaN
each NaN is its own unique instance. NaN will never be equal to NaN which seperates it from null and undefinided further. NaN can be generated when artimatic reaches a nonsenscial answer. 
Infinity and -Infinity (Google them if you don't know!)

What is the difference between primitive/simple and complex data types?
Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
*/