// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
const _ = require('lodown-cskladz');
/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    var result = _.filter(array, (e, i, array) => { return array[i].gender === 'male'});
    return result.length;
};

var femaleCount = function(array) {
    var count = _.reduce( array, (accumulator, person, i) => { 
        person.gender === 'female' ? accumulator +=1 : accumulator;
        return accumulator;
    }, 0);
    return count;
};

var oldestCustomer = function(array) {
    var result = [];
    var result1;
    result = _.pluck(array, 'age');
    result1 = _.pluck(array, 'age');
    //pull name property from the idex of the highest age....
    //see if index placement here can be used to pull location of object
    result.sort();//maybe leave the array unchanged, return the index of the highest value...?
    //need to find name of person on the index that matches last element of sorted array. 
    //find the object with an age property = the last element in the sorted array,
    //return that objects name property
    var index =_.indexOf(result1, _.last(result));
    return array[index].name;
    
};

var youngestCustomer = function(array){
    var result = [];
    var result1;
    result = _.pluck(array, 'age');
    result1 = _.pluck(array, 'age');
    result.sort();
    var index = _.indexOf(result1, _.first(result));
    return array[index].name;
    
    
};

var averageBalance = function(array){
    var result;
    //pluck all balances, then sum them up, divide it by the length of the pluck array.
    var balanceArr = _.pluck(array, 'balance');
    var arrayOfNumericBalances=(_.map(balanceArr, (e, i, a) => {
        let balance =balanceArr[i].replace('$', "");
        balance = balance.replace(',','');
        return Number(balance);
    }));
    result = _.reduce(arrayOfNumericBalances, (sum, balance) => {
       sum += balance;
       return sum; 
    }, 0);
    return (result / balanceArr.length);
    //return Math.round(result * 100) / 100;
    
};

var firstLetterCount = function(array, letter){
    var result = _.reduce(array, (count, e, i) => {
        if(e.name[0] === letter || e.name[0].toLowerCase() === letter){
            return count += 1;
        }else return count; 
    },0);
    return result;
    
};

var friendFirstLetterCount = function(array, customer, letter){
    
    //we want to iterate over array.customer.friends....
    
    //we want to match the name property of customer agaisnt all the different people.
    //when the string of customer === array.name, return that object 
                //OR return the friends array attached to that object.
        //Once we have the friends array of the customer requested we are going
            //to use reduce to iterate over it checking to see if friends.name[0]
            //is equal to letter || letter.toLowerCase() and increase the count.
    const personObject = _.filter(array, (personObject, i) => {
        if(personObject.name === customer) return personObject; });
    var friendsArr = _.pluck(personObject, "friends");
    var friendsList = _.pluck(friendsArr[0], "name");
    
    var result = _.reduce(friendsList, (count, aFriendName) => {
        if(aFriendName[0] === letter || aFriendName[0].toLowerCase() === letter){
            return count += 1;
        }else return count; 
    },0);
    return result;
};

var friendsCount = function (array, friendsName) {
    //Given an array and a name
    var result=[];
    //need to return the customers' names who have the given name in their friends list.
    //given a name, we need to locate all the personObjects with a friends list containing that name
        //const personObject = _.filter(array, (personObject, i) => {return personObject.friends});
    var friendsLists = _.pluck(array, "friends");
    //friendsLists is an array with an array of objects at each index.
    _.filter( friendsLists, (friendsList, i) => {
        _.filter(friendsList, (friendObject,index,c) => {
            if(friendObject.name === friendsName){ result.push(array[i].name);}
        });
    });
    return result;
};
friendsCount(customers, "Duke Patrick");
var topThreeTags = function(arrayOfCustomerObjects){
//look through tags, find the three most common tags
//count tags, return the top three with the highest count
    var arrOfTags=[];
    var arrayOfTagsInArrays = _.pluck(arrayOfCustomerObjects, "tags");
    _.each(arrayOfTagsInArrays, (tagsInArrays,i) => {
        _.each(tagsInArrays, (e) => {arrOfTags.push(e);} );
    });
//Now that we have a signle array filled with strings of all the tags...
//Make an object with keys equal to all the unique words....
    var wordMap = {};
    _.each(arrOfTags, (e) => { wordMap[e] =0; });

// //adjust the values attached to those keys by mapping over the array of words
// //and increases the numeric value of the key matching the string name by 1
    _.each(arrOfTags, (word) => { wordMap[word]++; } );
        console.log(wordMap);
 //iterate through the object, chceking the values at wordMap[key]
 //if numeric value is higher than the first value of the array, put it in the 
 //front of the array.....return the first 3 values of the array.
    var sortedWordArray= [arrOfTags[0]];
    _.each(wordMap, (count,word) => {
        let frontWord = sortedWordArray[0];
        if(count >= wordMap[frontWord]){
            sortedWordArray.unshift(word);
        }else sortedWordArray.push(word);
     });
//return the first 3 values of the array.
    return _.first(sortedWordArray, 3);

   
};

var genderCount = function (arrOfCustObj){
    var genderCountObject = {};
    var genderArr = _.pluck(arrOfCustObj, "gender");
    _.each(genderArr, (gen) => {
     (!genderCountObject[gen]) ? genderCountObject[gen]=1 : genderCountObject[gen]++;
    });
    return genderCountObject;
}; 
topThreeTags(customers);
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
