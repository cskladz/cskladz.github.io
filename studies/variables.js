// What is a Variable?
// A variable is the bread and butter of your programming language. it gives us the ability to make actions on things in a 'hypothetical' manner
// Conceptually, it is described as a container that store value.
// Outside of algebra, in javascript, varibales can be used to store all sorts of values.
// Becuase javascript is a 'loose-language' we can use the keyword var for all sorts of values (more on that in Datatypes)
// we can also name our varibles using camelCase in plain vernacular so that what we are writing can be more easily understood by you, and any future yous or others who may be browsing your code.



var exampleName; //declares a varible in the global scope

//as of right now, the varibale exists, but hold no value.
//if we were to console.log the value stored in exampleName it would come back as undefined. if it was undeclared it would throw an error.


//we can assign value to varibles in a number of ways, the most common is with Assignmnet Operators (more on that in Operators).
//one of the unique features of javascript over many eariler programming languages is thatthe var delcaraction of varibale in javascript can be used for all datatypes.
    //wehereas in earlier languages character, numbers, decimals, booleans....all required their own specific 'container' declaration. 
    
    
    
//in a general sense a varible is an easily recognizable name that contains a value. Some values are stored intrinsically, numbers 0-10^10, letter a-z,A-Z, multiplicaition and division charts.
//whereas some other values may not be as 'concrete' as numbers and letter, or may be arranged in a unique manner not commonly referenced and therefore are infered through computation at the moment the code is executed.
//ie. your complex data object doesnt exisist in a tangible reference anywhere in memory until your program runs and assigns the value, whereas the numbers 0-10 already exists someehere in memeory and your varible becomes a pointer to that direct value.
    
// named identifiers bound to a defined scope within our application

// keyword var followed by the named indentifier (what we're going to call it) 
// and then assigned a value with the equals sign assignment operator

// 'containers' that can hold primitive datatypes up to 8 bytes in length. 
// these 'containers' can also hold references, acting as pointers to the stored value.
// this allows us to store simple datatypes, such as: numbers, Booleans, and strings.
// as well as complex datatypes like objects, arrays, and functions.

// Variable Declaration and Varibale Assignment
// unassigned declared varibales will return 'undefined'
// null is used specifically to state the varibale hold no value, or is void of value.

// the "loosely-typed" nature of JavaScript allows us to reassign a value of any type to a variable.
// ex)
// var x =10;
// x = {/*complex : object*/};       -> is not a problem in JavaScript.

// Varibales offer flexibilty to our code; by assigning a a varible we can make changes one-time that
// can make multiple changes for us at runtime...we can reference variables instead of hard-coding values to memory.
// this allows us write a dynamic code that takes full advantage of the scalability offered in JavaScript 
