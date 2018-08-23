/*
Datatypes
These are the 'types' of values that your variables can reference. They all 
have different properties and can be manipulated in different ways. The type of 
data referenced by a variable will determine its functionality. Certain pre-
exixting methods apply to their corresponding 'data' and 'types'.

Number
Any integer, floating(decimal)point numbers included. Fractions are resolved
as expressions when they are met and will not carry symbolic reference through
any iterations of it.
*/
var num = 10;
/*
String
Consists of a group of characters, anything in text, even numbers can be a 
string. You make a string by put single or double quotes around a line of text.
You can also make an empty string by putting quotes around nothing. Values
placed in a parenthesis following the keyword ‘String()’ will be ‘stringified.’
*/
var str = 'a string';
var str2 = 'a string';
var emptyString = '';
var numString =String(105);  /* if consoled logged, will print a 
string(the equivalent of a line of text) that reads: ‘105’*/
/*
Boolean
Values known as true or false. The word true and false are used much like 1, 2,
3, 'a', 'b', 'c', or any other keyword and will be highlighted according to the
interpreter’s settings. An interpreter is the program that complies your
JavaScript code for you. A common beginner’s mistake is to put quotes around
these because they are words, doing so turns them into strings and are
understood by the program as a completely different values.
(side note: A good example for using === vs == can be shown with some jsbin
expamples using true/'true' and false/'false').
*/
var boo = true;
/*
Array
An array is a zero index list. It is denoted with bracket notation:
*/
var exampleArray = ['value1', 'value2', 'value3'];
/*
An array can store references to any datatype as an element attached to an 
numbered index. In the above example if we wanted to access the 2nd value in the
array we would type:
*/
console.log(exampleArray[1]); // → value2
/*
This will print the value of the second element referenced in the array. The 
most important thing for a user to remember is that computers start counting at
zero. The first element in an array is stored at [0]. We can access the last 
element in an array by getting the length of the array and subtracting 1 from 
it (because it starts counting at zero).
*/
console.log(exampleArray.length); //will print 3 to the console.
console.log(exampleArray[exampleArray.length]) /* is the equivalent of 
exampleArray[3].
/But alas! There is no index 3 even though we have 3 items in our array which
is why we get an error…knowing that in this example, exampleArray[2] is the last
value stored in the array, we just need to subtract one from whatever the length
is, like this: */
exampleArray[exampleArray.length-1];
/*now if we console.log that….*/
console.log(exampleArray[exampleArray.length-1]); /*the last value, ‘value3’ 
in this case, will print to the console.*/
/*
Object
An object in JavaScript is commonly described an as unordered collection of 
key/value pairs. Much like how every element in an array is attached to a 
specific index number, so too are the values in an object attached to a specific
key. It is denoted with curly brackets and uses a colon to attach a datatype to
a string(the string is analogous to the index in an array), with multiple values
separated with a comma. 
*/
var exampleObject = {key1: ‘value1’, key2: ‘value2’};
/*
These ‘keys’, also referred to as ‘properties,’ typically being a string, allow
us to attach value to a specific type of property denoted with a word. This 
essentially makes the data easier to manage and navigate by a human. The 
computer cares little whether your data about the specific property is attached 
to a number or a string. But for a human, lets say you were trying to store data
about different cars, it’s much easier to read data about the colour of a 
specific car when its attached to a string name ‘colour’ than to a certain 
number in an array.
Values are called by typing the name of the object followed by its key in 
either square brackets with the key name as a string, or a period and the name
of the key/property you wish to access. This is referred to as ‘bracket 
notation’ and ‘dot notation’ respectively.
*/ 
console.log(exampleObject[‘key1’]);  // will print value1 to the console.
console.log(exampleObject.key2); //	will print value2 to the console.
/*
The reason for this duality will become more clear later on. But it adds to the 
dynamism of accessing unknown objects. A key not in string form in bracket 
notation will be understood as a variable reference and the compiler will be
looking to resolve that expression before checking the object for the value
attached to that key.
*/
/*
Function
Functions are your workhorses in almost any programming language and in
JavaScript there is little exception. More details will follow in the section
on functions, but for know let’s see what they are and how to make them through
this lens of ‘datatypes’. Functions, being their own datatype, can be declared
in several ways. The most common way, borrowed from the programming languages
before it, is:  the keyword ‘function’  followed by a space and the named 
identifier with any paramaeters youre expecting to pass in stated within the
immediately proceeding parenthesis separated with a comma, and a block of code
sectioned off with curly braces.
*/
function exFunction(exParameter){
	/*
	block of code you wish to execute
	*/
	console.log(exParameter);
}
/*
Functions are ‘invoked’, or ‘called,’ by typing their name immediately followed
with parenthesis containing arguments (the values you wish to assign to the
parameters when your function is executed).
*/  
exFunction('value');
/*
/*
Undefined 
Undefined is a generic data type generally assigned by the compiler when it 
cant resolve to a value. Basically the computer is letting you know that 
something exists, your code is not broken, but somewhere along the way your 
value got lost and is being returned without meaning. Two most common places we
see undefined is when we are declaring a variable, but it never gets assigned 
any value; and when a function doesn’t return anything. In both instances we 
will get an undefined value.
Keep in mind that although it shows up in the console as word it is not a 
string, and like we mentioned in the Boolean section, it should not be put in 
quotations unless you want a string value that reads undefined. They will 
behave differently because they are different datatypes. 
*/
/*
Null
Null is a deliberately ascribed value of nothing. Null is only given with an 
assignment operator, most often by the programmer, and is used to denoted 
emptiness separate from undefined and NaN.
*/
/*
NaN
An acronym for ‘Not A Number,’ each NaN is its own unique instance. NaN will 
never be equal to NaN which separates its behaviour from null and undefined 
further. NaN can be generated when arithmetic reaches a nonsensical answer. 

Infinity and -Infinity
Infinity will always be the largest number. -Infinity will always be the 
smallest number. These are reserved keywords and so should be used without 
quotes or it will process like a string if quotes are used.
*/