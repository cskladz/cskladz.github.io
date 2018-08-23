/* What is a Variable?
A variable is the bread and butter of your programming language. it gives us the
ability to make actions on things in a 'hypothetical' manner. Conceptually, it 
is described as a container that stores value, or as a reference to where some 
specific value is stored. Similar to algebra, variables act as place holders for
us to create a program where the actual computing value will be provided at a 
later point in time.

Whereas in most other programming languages the programmer must use distinct 
keywords for numbers, decimals, strings, arrays, etc; because JavaScript is a 
'loose-language,' we can use the keyword var for all sorts of values (more on 
that in Datatypes). We can control for scope and mutability with the ‘let’ and 
‘const’ keywords. JavaScript also uses a naming system referred to as camelCase 
which allows us to name variables in plain vernacular so that what we are 
writing can be more easily understood by you, and any future yous or others who 
may be browsing your code.  Variables can hold primitive datatypes up to 8 bytes
in length. 
Variables can also be understood as ‘holding’ references, acting as pointers to
where the actual value is stored. This allows us to store simple datatypes, 
such as: numbers, Booleans, and strings, as well as complex datatypes like 
objects, arrays, and functions.

In a general sense a variable is an easily recognizable name that contains a 
reference to some value. Some values are stored intrinsically, numbers 0-10^10, 
letters a-z,A-Z, multiplication and division charts, and Booleans for example. 
Whereas some other values may not be as 'concrete' as numbers and letters, or 
may be arranged in a unique manner not commonly referenced and therefore are 
inferred through computation at the moment the code is executed.
I.e., your complex data object doesn’t exist in a tangible form but as a series 
of references in memory to specific values until your program runs and assigns 
them value, whereas the numbers 0-10 already exist, specifically pointed to 
in their respective places in memory and your variable becomes a pointer to that
direct value. 
Variable Declaration and Variable Assignment; these are two importantly 
different steps when talking about variables. 

Declaration:   */
var exampleName1; //declares a variable in the global scope.
let exampleName2; //declares a variable in the ‘scope’ in which it was declared.
const exampleName3; //declares an immutable datatype. 

/*As of right now, the variable exists, but holds no value. If we were to 
console.log the value stored in exampleName it would come back as undefined. If 
it was undeclared it would throw an error, such as if we console.log-ed 
exampleName2 is a different scope than in which is was declared. Named 
identifiers (another word for variables) are bound to a defined scope within our
application. (More details on that later). Null is used specifically to state 
the variable hold no value, or is void of value.

We can assign value to variables in a number of ways, the most common is with an
Assignment Operator (more on these in Operators). The standard protocol is as 
follows:
The keyword var followed by the named identifier (what we're going to call it)
and then assigned a value with the equals sign assignment operator. */

var exampleName = 'Christopher';

/* The "loosely-typed" nature of JavaScript allows us to reassign a value of 
any type to a variable.*/
var x =10;
x = {/*complex: object*/};      // --> is not a problem in JavaScript.

/* Variables offer flexibility to our code; by assigning a variable we can make 
changes one-time that can make multiple changes for us at run-time...we can 
reference variables instead of hard-coding values into our code. This allows us
to write a dynamic code that takes full advantage of the scalability offered 
in JavaScript. */