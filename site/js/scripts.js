import {peopleArray} from './modules/getPeopleArray.js';
import reorderedPeopleArray from './modules/reorderedPeopleArray.js';
import dividedPeopleArray from './modules/dividedPeopleArray.js';  
import {createVaccineGroup} from './vaccineGroupConstructor.js';

window.addEventListener('load',()=>{
    
    //create empty array;
    let arrayGroup = [];
    
    //turns into reordered json array;
    arrayGroup = (reorderedPeopleArray(peopleArray));
    
    //divides itself into 4 equal sized arrays;
    arrayGroup = dividedPeopleArray(arrayGroup, 4);

    //now, any of the 4 subgroups (arrays) can be handled;

    //reorganizing each of these 4 subarrays into a 'vaccineGroups' object;
    const vaccineGroups = createVaccineGroup(arrayGroup[0], arrayGroup[1], arrayGroup[2], arrayGroup[3]);

    //new syntax to handle each of the 4 groups;
    console.table(vaccineGroups.day1);
    console.table(vaccineGroups.day2);
    console.table(vaccineGroups.day3);
    console.table(vaccineGroups.day4);

})

