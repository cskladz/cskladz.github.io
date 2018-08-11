// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = (anything) =>  {return anything}; 

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = (anything) => {
    
    if(Array.isArray(anything)) return "array";
    if(anything === null) return "null";
    else return typeof anything;
    
};

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = (array, num) => {
    if(!(Array.isArray(array))) return [];
    if(typeof num !== "number") return array[0];
    else if (num > array.length) return array;
    else {
        var result =[];
        for (var i = 0; i < num; i++){
            result.push(array[i]);
        }
        return result;
    }
};

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = (array, num) => {
    //console.log(array.reverse());
    if(!(Array.isArray(array))) return [];
    if(typeof num !== "number") return array[array.length-1];
    else if (num > array.length) return array;
    else {
        var result =[];
        for (var i = array.length-num; i < array.length; i++){
            result.push(array[i]);
        }
        return result;
    }
};
    /*{
        var result =[];
        var ii = 0;
            for (var i = array.length-1; i > 0 ; i--){
            while(ii < num){
                console.log("Beg in while", result);
                result.push(array[i]);
                i--;
                ii++;
                console.log("End in while", result);
            }
            return result;
        }
    }*/

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = (collection, action) => {
    if(Array.isArray(collection)){
        for(var i=0; i <collection.length; i++){
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection){
            action(collection[key], key, collection);
        }
    }
}; 

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = (array, value) => {
   for (var i = 0; i < array.length; i++){
        if(array[i] === value) return i;
   }
    return -1;
};

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/



_.filter = (array, action) => {
    var result = [];
    //console.log("array", array, "action", action);
    _.each(array, 
        function(element, index, collection){ 
            if(action(element, index, collection)){ 
                result.push(element); 
            }    
        });
    //console.log("result", result);
    //_.each(array,((element, index, collection) => { if(action(element, index, collection)) result.push(element) }));
    return result;
};
//how does filter make use of .each??
    //when .filter is called...<array = ["a", 1, "b", 2, "c", 4]>  
    // <action is =  ƒ (e,i,a){
    //     return typeof e === "string" && i < a.length/2;
    // }>
        //this is written in the test file....".filter is called with the above array and function passed into it..."
        //we want to pass this "action" into the "action" of .each...
            //basically running this given function agasint all values in a collection...
    //based on the instructions, 
        //we see that we want to do some 'thing' with/on/to some 'array'
        //we want to return a new array
            //in this new array we want "elements" aka 'values at array[index]' that pass some unknown, but assumed 'test' as true
                // push elements from the given/unknown array that pass the given/unknown test as true to a new array to be returned
    //????
        //make a new array to hold our result
        //.each(array..... takes the array that is passed in, so in the specific case that is a string "a" number 1....etc
        //now we need to define what the function is...if we look at .each...
            /// its a for loop that will run perform action(collection[i], i, collection) a number of times equal to the length of the given array
                //sooo...if we were to make if(action(element, )
                //this is the line of code we need to define to make .filter what we want it to do to all elements in an array
                    //in this particular case we want the  in .each to be the "action" that is <a true or false test>  push all array[i] (any values) that are tested
    

/*
_.filter{arra

*/




/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = (array, action) => {
    var result = [];
    _.filter(array, ( (element, index, collection) => { if(!(action(element, index, collection))) result.push(element) } )  );
    return result;
    
};
//     console.log('array ',array, "action ", action );
//       var result = _.filter(array, function(e, i, a){});
        
//       console.log(result);
//       return result;
// };

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = (array, action) => {
    var result = [[],[]];
    _.each(array, ( (element, key, collection) => {
        if(action(element, key, collection)) result[0].push(element);
        else if(!(action(element, key, collection))) result[1].push(element);        
        //else return "What the hell am I doing here?? I must not be Boolean\n";
        }));
    return result;
        
    // _.reject(array, ( (element, key, collection) => {if(!(action(element, key, collection))) result[1].push(element) } ) );
    
};

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//apply indexOf as the function to pass into .each....
//use indexOf 

//if match
    //splice?....
    //indexOf requires an array and a value. to do what?? to find duplicates matching arrays
        //want to use the <resolved expression of _.each> as the value parameter in indexOf
            //need to make an action to pass into .each that acts as a function which will return the value of th element in given array
    //splice out returned indexes from indexOf;
_.unique = (array) => {
    var result = [];
    for(var i =0; i<array.length; i++){
    let index =(_.indexOf(array, array[i]));
    //if the current value is not included in the result array then push it
    if(!(result.includes(array[i]))) result.push(array[_.indexOf(array, array[i])]);
    }
    return result;
    //using .indexOf, we'll get a return of an index
    
    
    //we want to take an array, and return the array with duplicates removed....
     //one method is to sort the array....and then push elements that dont match its preceeding element into a returned array
/*  var uniqueName = [];
_.each(array, (element, index, array) => {
    console.log("uniqueName before if", uniqueName);
    let sortedArray = array.sort();
    if(sortedArray[index] !== sortedArray[index-1]) uniqueName.push(element);
    });
  return uniqueName;
*/

//lets push the return of the first occurence of each matched value into a new array.

    
//     console.log("array", array);
//     var result = [];
//   _.each(array, (_.indexOf(array, ((element, index, array) => { 
//       if(action(element, key, collection)){
           
//       } } ) )  ));
//   console.log(result);
//     return result;
};

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = (collection, action) => {
    var result =[];
    _.each(collection, (element, index, collection) => {
        result.push((action(element, index, collection)));     
    });        
        
    
        
        return result;
}; 

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = (array, property) =>{
  var result = [];
  _.map(array, (element, index, collection) =>{
      result.push(element[property]);
  } );
  return result;
    
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = (array, value) =>{

    return array.includes(value); //=== true ? true : false;
//   if(array.includes(value)) return true;
//   else if(!(array.includes(value))) return false;
    
};

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = (collection, action) => {
  var result;
  if(typeof action != "function" ){
      _.each(collection, function(element, index, collection){
            if((!!(element))) result =true;
            else result = false;
            console.log(result);
            return result;
        });
  }
  else {  
      var reject = _.reject(collection,action);
    reject.length === 0 ? result = true : result = false;
  }
    //else if(_.filter(collection, action)) return true;
    //call function for every element (.each should meet both requests for iterating over an object and/or an array with said parameters)
    //console.log(_.reject(collection, action));
    //pass function over every element in an array or object
    
    //if(action(e) === true) for every iteration return true
        //if(!action(e)) for any iteration return false. 
        
    //if function is not provided, run !! agaiasnt every value and return true if all true else false. 
//   if(action === undefined){
//       _.each(collection, function(element, index, collection){
//             if((!!(element))) result =true;
//             else result = false;
//             console.log(result);
//             return result;
//         });
//   }
//   else{
//         _.each(collection, function(element, index, collection){
//             if(action(element)) result = true;
//             else result = false;
//             console.log(result);
//             return result;
//             //result.push(action(element));
            
//         });
//   }
return result;
};

//run the collections through .filter and .reject and infer presence of a falsey statemtns by comparing the lengths of the returning arrays....check if returning array includes any false statements.....
//  for example, if i send the same array and function to .filter and .reject, .filter will only fill up true values, if that returning length is less than the length of array sent to it, we can infer not all statements were true.
//  or, similary we can send it through .reject. if it returns an empty array then return true, else, false.

//     var result1;
//     var result2;
//     console.log(Boolean(collection.length === _.filter(collection, action).length));
//     //console.log((_.filter(collection, function(e){return Boolean(collection[e])})));
//     if(action === undefined && collection.length === _.filter(collection, function(e,i,a){return Boolean(e)} ).length) result1 = true;
        
//     // && (_.filter(collection, function(e){return Boolean(collection[e])}) === true)) return true;
//     if(action === undefined && collection.length === _.reject(collection, action).length) result1 = false;
//     _.each(collection, (element, index, collection) =>{
//     if(action(element, index, collection)) result2 = true;
//     else result2 = false;
//     });
//   return result1; 
// };

/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = (collection, action) =>{
    var result;
     if(typeof action != "function" ){
      _.each(collection, function(element, index, collection){
            if((!!(element))) result =true;
            else result = false;
            //console.log(result);
            return result;
        });
  }
  else{
    var filter = _.filter(collection, action);
    filter.length === 0 ? result = false : result = true;
    return result;
  }
    
 return result;   
};

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = (array, action, seed) =>{
//pass the action onto every element in the collecion
//var result1 = _.each(array, action); 
//pass the result from the action back into the function
  
_.each(array, function(element,index,array){
            if(seed === undefined){
                return seed = element;
            } 
            else {
                return seed = action(seed, element, index);
        
                }
    });
        
//console.log(result1);
 return seed;   
};

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = (object1, obj2, nextObj) => {
    for(var key in object1) {
        Object.assign(object1, obj2, nextObj);
    }
    return object1;
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
