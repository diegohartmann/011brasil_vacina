import getPeopleGroups from './modules/getPeopleGroups.js';
import createNode from './modules/createNode.js';
import {getTableTitle, getSinglePersonHTML, getDayGroupHTML} from './modules/getElementsHTMLStrings.js';

const desiredNumberOfPeopleGroups = 4;

window.addEventListener('load',()=>{
    
    // getting final data (array of objects). It's an array (containing arrays [containing people data] ) (name, age...)
    const peopleGroup = getPeopleGroups(desiredNumberOfPeopleGroups);
    
    
    //#region now it's possible to handle the objects;
    // console.table(peopleGroup[0]);
    // console.table(peopleGroup[1]);
    // console.table(peopleGroup[2]);
    // console.table(peopleGroup[3]);
    //#endregion ------------------------------------


    //foreach 'people array' insie 'peopleGroups',
    for (let i = 0; i < peopleGroup.length; i++) {
        //we get the current people group
        const peopleArray = peopleGroup[i]; 
        
        //and init a var to get all of it's people (items) strings
        let peopleListHTMLString = '';

        //add one fixed line on the top so it will be the title of the lines bellow it
        peopleListHTMLString += getTableTitle();
        
        //now, we iterate to each person inside this current people array to add to the 'let peopleListHTMLString' above. 
        peopleArray.forEach(_person=>{
            //adding it here:
            peopleListHTMLString += getSinglePersonHTML(_person);
        })
        
        //now that our 'peopleListHTMLString' string is complete, we can check it:
        //console.log(peopleListHTMLString);

        //so, we pass this peopleListHTMLString as a parameter to get the full day group html srting,
        //a bigger string (with all its peopleListHTMLString summed up) .
        const dayHTMLString = getDayGroupHTML(i, peopleListHTMLString);
        
        //now we use this full day string to create a HTML Node with a self made function.
        const dayHTMLNode = createNode(dayHTMLString);

        //now, we gotta append this node to a container
        document.querySelector('body > section').appendChild(dayHTMLNode);

        //and all of it will repeat in the next for loop, for each day (one to 'desiredNumberOfPeopleGroups');
    }

})


