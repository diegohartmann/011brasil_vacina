const dividedPeopleArray = (_array, _desiredNumberOfGroups = 4) =>{
    const numberOfItems = (_array.length) / _desiredNumberOfGroups;
    return ( new Array(Math.ceil(_array.length / numberOfItems )).fill().map(()=> _array.splice(0, numberOfItems)) );
}

export default dividedPeopleArray;