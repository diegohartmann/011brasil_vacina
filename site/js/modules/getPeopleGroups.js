import {peopleArray} from './getPeopleArray.js';
import reorderedPeopleArray from './reorderedPeopleArray.js';
import dividedPeopleArray from './dividedPeopleArray.js';  

export default function getPeopleGroups(_numberOfGroups = 4){
    //create empty array;
    let peopleGroups = [];
    
    //turns into reordered json array by priority;
    peopleGroups = (reorderedPeopleArray(peopleArray));
    
    //divides itself into N equal sized arrays;
    peopleGroups = dividedPeopleArray(peopleGroups, _numberOfGroups);

    //now you can handle any of the groups (days)
    // const day1 = (peopleGroups[0])
    // const day2 = (peopleGroups[1])

    return peopleGroups;
}