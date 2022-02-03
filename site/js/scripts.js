import createPeopleListData from './modules/createPeopleListData.js';
import createNode from './modules/createNode.js';
import {getTableTitle, getSinglePersonHTML, getDayGroupHTML} from './modules/getElementsHTMLStrings.js';

window.addEventListener('load',()=>{
    
    // getting final data (array of objects)
    const days = createPeopleListData();
    
    //#region now it's possible to handle the objects;
    // console.table(data[0]);
    // console.table(data[1]);
    // console.table(data[2]);
    // console.table(data[3]);
    
    //foreach 'people array' insie 'days' array,
    for (let i = 0; i < days.length; i++) {
        //we get the current people array
        const peopleArray = days[i]; 
        
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

        //so, we pass this peopleListHTMLString as a parameter to get the full group html srting, a bigger string.
        const dayHTMLString = getDayGroupHTML(i, peopleListHTMLString);
        
        //now we use this full day string (with all its peopleListHTMLString summed) to create a HTML Node.
        const dayHTMLNode = createNode(dayHTMLString);

        //now, we gotta append this node to a container
        document.querySelector('body > section').appendChild(dayHTMLNode);

        //and all of it will repeat in the next for loop, for each day (one to four);
    }

})


