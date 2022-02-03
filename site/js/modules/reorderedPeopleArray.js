import {compareAge, compareJob} from './reorderedPeopleArrayHelpers.js';

const reorderedPeopleArray=(_peopleArray)=>{
    let reorderedArray = [];
    //reorder by age > 60;
    reorderedArray = _peopleArray.sort(compareAge);
    //reorder by job;
    reorderedArray = reorderedArray.sort(compareJob);

    return reorderedArray; 
}
export default reorderedPeopleArray;

