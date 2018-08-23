/*String Manipulation
What good is creating and storing data if we can’t do anything with it? At the
most basic level, JavaScript offers a wide variety of built in methodologies to 
glean meaning from our data. The most common type of string manipulation, 
again, because JavaScript is a ‘loosely-typed’ language, is done with the 
addition sign operator. It can be used to ‘add’ strings together. Using the 
addition sign '+' operator with string data enacts the ‘concact’ method, and 
will append the end of one string with another string. A string with 8 
characters added to another string with 8 characters will have a number of
characters equal to the sum of their lengths, 16. 
*/
var str = 'str';
var ing = 'ing';
console.log(str+ing); // → will print to the console the concated value ‘string’
/*  
We can access information about the properties of our strings and we can 
manipulate our strings with JavaScript’s build-in ‘methods.’ There are string 
methods and string properties. Methods are preexisting constructs that allow us 
to ‘do’ a variety of things with and to strings. Properties are attributes of 
the value itself and give us to access information about the actual value. 
One of the most commonly used properties gives us its length(mentioned briefly 
in a different context in the Array section on the Variables page). The length 
property is attached to the end of an expression resolving to a string with dot 
notation and an empty function call(empty parenthesis).
*/
console.log(str.length); /* →prints to the console a number equal to the number
of characters in the string*/
/* 
Some other examples of string manipulation include methods than alter or modify
the string value. Keep in mind that strings are primitive data types, in other 
words, all the possible string combinations already exist and are permanently 
stored at a specific memory address. When we assign the value of a string to a 
variable, all that variable really holds is a reference of the address to the 
location of that specific arrangement of characters in memory. When we ‘alter’ 
or ‘modify’ a string all we are really doing is changing the address the 
variable holds to one that references the appropriate arrangement of characters.
Some examples of the more common string methods that will, in our practical 
understanding, alter our string are: slice, indexOf, trim, split, toUpperCase
and toLowerCase.
When manipulating strings, some of the methods treat the string as a zero 
index array with each character as its own element and others do not. It can be 
useful similarly for the user to be able to regard strings in such a fashion 
for some of the following methods but also for string methodologies in general.
But always check with console.log or on MDN exactly how the parameters function
for each specific method and datatype.
*/
var string = 'hello world';

console.log(string.slice(3)); // → lo world
console.log(string.slice(3,7)); // →lo w
/*slice is a pure method that leaves the original string (assignment) unaltered
and returns a string contaning a specifically different arrangment of characters
In the example, ‘h’ is at index zero(0) and ‘o’ at index four(4). If two 
parameters are given, slice will return all the characters between the index 
given and the second number, ixcluding the first but excluding the last. 

Trim is used to remove any white space before or after a string and will also 
not alter the reference the variable holds to that string from henceforth on. 
IndexOf will return the index position (starting with 0) of the first occurance
of the passed in character. 
*/
var str = '  string  ';
str.slice(1);
console.log(str);
var result = str.trim()
console.log(str);
console.log(result);
/*
Sometimes it is necessary or even just easier to organize strings into an 
array. Say for example we have a 400 page text and its all understood as one 
giant string, talk about a headache at counting every single character!! 
Fortunately there is a method, split, that will take a string and make an array
of elements every time another specified character is met. One of the most 
common uses of split is with a string containing an empty space.
*/
var sentence = 'this is a group of words';
var arrayOfWords = sentence.split(' ');
console.log(arrayOfWords);
  