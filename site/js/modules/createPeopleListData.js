import {peopleArray} from './getPeopleArray.js';
import getVaccineGroups from './getVaccineGroups.js'; 

export default function getFinalPeopleListData(){
    return getVaccineGroups(peopleArray);
}
