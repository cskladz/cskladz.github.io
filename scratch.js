

'use strict';


function logEachCharRecursively( str){
    if(!str.length) {return;}
    console.log(str[0]);
    logEachCharRecursively(str.slice(1));
}
logEachCharRecursively("green eggs and ham");

function logEachCharIteration (str){
    str.split('').forEach((char) => {
        console.log(char);
        });
}

let person = {
    name: 'andy',
    gender: 'male',
    car: 'honda',
    hobbies: {
        first: ["car",'computers','games']
    }
};

person.hobbies.first.forEach((hobby) => {
    console.log(hobby);
});

function func (obj){
    
    
}

const people = [{
        name: 'andy',
    gender: 'male',
    car: 'honda',
    hobbies: {
        first: ["car",'computers','games']
    }
    },
    {name: 'cain',
    gender: 'male',
    car: null,
    hobbies: {
        first: ["java",'javascript','music']
    }
}];
function func (people){}
    if(people.hobbies) {
    if (Array.isArray(people)){
        func(people);
    }
}