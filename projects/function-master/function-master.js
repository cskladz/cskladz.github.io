//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let result = [];
    for( var key in object){
        result.push(object[key]);
    }
    return result;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    /*var result = " ";
    //console.log("Object.Keys", Object.keys(object));
    for( var key in object){
        result += (key + " ");
        console.log(result);
    }
    return result.trim();*/
    let result = Object.keys(object);
    return result.join(" ");
}     


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let result = "";
    for(var key in object){
        if(typeof object[key] === "string"){
        result += (object[key]+" ");    
        }
    }
    return result.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) return 'array';
    else if (typeof collection === 'object') return 'object';
    else return typeof collection;
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

    return (string[0].toUpperCase() + string.slice(1));
    //return (string[0].toUpperCase() + string.splice(1, -1));
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var result = "";
    var arr = string.split(" ");
    for(var i = 0; i < arr.length; i++){
        var captialize = capitalizeWord(arr[i]);
        result += captialize + " ";
    }
    return result.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    //given an object with a name property, return a string "Welcome " + object.name
    return ("Welcome " + capitalizeWord(object.name) +"!");

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    //given an object with name a speciies properties
    return ("" + capitalizeWord(object.name) +" is a " +  capitalizeWord(object.species));
    //return "Name is a Species"

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.noises === undefined) return "there are no noises";
    return (object.noises.length > 0 ? (object.noises).join(" ") : "there are no noises" );

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var arr = string.split(" ");
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === word) return true;
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //given a name and an object.
    object.friends.push(name);
    return object;
    
        //add the given name to the object's friend property stored as an array
        
        //return new modified object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //check friends poroperty of given object for name match
    if(Array.isArray(object.friends)){
        for(var i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name) return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var result =[];
    for(var i =0; i< array.length; i++){
        if(!(array[i].friends.includes(name))  && array[i].name !== name){ result.push(array[i].name) }        
    }
    return result;    
}

    
    //check friends poroperty of given object for name match
        // return array of names not matched
        //given array is an array of objects. need to skip over the object in the array whose .name value mateches the given name 
        //then push all the elements in array.friends where the given name is not found into result
        //return result
/*
var result = [];
console.log("array and name ",array, name);
    for(var i = 0; i < array.length; i++){
        
        if(array[i].name !== name){
            if(array[i].friends.length === 0 && array[i].name !== name){
                result.push(array[i].name);
                break;
            }
            for(var ii = 0; ii <array[i].friends.length; ii++){
                console.log("before second if", array[i].friends[ii]);
                if(array[i].friends[ii] !== name ) result.push(array[i].friends[ii]);
                console.log(result);
            }return result;
            
        }
    }

*/            /*
        console.log("array[i].friends[ii]", array[i].friends[ii], i, ii);
        console.log("array[i]", array[i]);
        //console.log("array[i][key]",array[i][key]);
        console.log("array[i].name",array[i].name);
        if(array[i].name !== array[i].friends[ii]) result.push(array[i].friends[ii]);
        console.log("result ", result);
        
        }
    }
        //console.log("1",result);
        //if(array[i].friends[i] !== name) result.push(array[i].friends[i]);{
        //console.log('2',result);
//}
    return result;
    */

//}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    //should take an object, a key, and a value
function updateObject(object, key, value) {
    //should update the property <key> on <object> with new <value>
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //should take an object and an array of strings.
    //should remove any properties on object that match any strings carried in the array
    for(var i = 0; i<array.length; i++){
        for(var key in object){
            if (key === array[i]) delete object[key];
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
   
//we want to take an array, and return the array with duplicates removed....
    //so lets search google for an "array method to remove duplicates in javascript"
        //one method is to sort the array....and then remove elements that match preceeding element
            //
    var sortedArray = array.sort();
    var uniqueName = [];
    for (var i = 0; i<array.length; i++){
        if(sortedArray[i] !== sortedArray[i-1]) uniqueName.push(sortedArray[i]);
    }
    return uniqueName;
    //do something with matched indexes??
}
   
    // var arrCompare = array;
    // for(var i =0; i< array.length;){
    //     var firstRunCheck = true;
    //     for(var ii =0; ii< array.length; ii++){
    //         console.log("ii", ii, "i", i);
    //         if(array[i] === array[ii]){
    //             if(firstRunCheck === true) firstRunCheck = false;
    //             else if( firstRunCheck === false) arrCompare.splice(ii, 1);
    //         }
    //     }
    //     i++;
    //     firstRunCheck = true;
    // }
    // return arrCompare;

//}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}