import reorderedPeopleArray from './reorderedPeopleArray.js';
import dividedPeopleArray from './dividedPeopleArray.js';  

export default function getVaccineGroups(_peopleArray){
    //create empty array;
    let arrayGroup = [];
    
    //turns into reordered json array;
    arrayGroup = (reorderedPeopleArray(_peopleArray));
    
    //divides itself into 4 equal sized arrays;
    arrayGroup = dividedPeopleArray(arrayGroup, 4);

    //now you can handle any of the groups (days)
    // const day1 = (arrayGroup[0])
    // const day2 = (arrayGroup[1])

    return arrayGroup;
}