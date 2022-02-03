export function compareAge(a,b) {
    if ( a.idade > b.idade ){
      return -1;
    }
    if ( a.idade < b.idade ){
      return 1;
    }
    return 0;
}
export function compareJob(a,b){
    if (goesBefore(a,b)){
        return -1;
    }
    if ( goesBefore(b,a)){
        return 1;
    }
    return 0;
}

function goesBefore(_one, _two){
    const priorityJobs = ['saúde', 'educação','alimentícios','segurança'];

    let condition = false;
    
    //#region ===== PERSON ONE JUST GOES BEFORE PERSON TWO IF 

        //surpasses not priority aged people
        const isPrioriryJob = priorityJobs.includes(_one.areaDeAtuacao.toLowerCase());
        const otherIsPrioriryAge = _two.idade > 60;
        const otherIsPrioriryJob = priorityJobs.includes(_two.areaDeAtuacao.toLowerCase());
        const isYounger = _one.idade < _two.idade;
        
        
        if(!otherIsPrioriryAge){
            //person one has to have prioriry job
            if(isPrioriryJob){
                //just goes before a older person if...
                if(isYounger){
                    //..this older person is not a priority job also
                    if(!otherIsPrioriryJob){
                        return true;
                    }
                    return false;
                }
                return true;
            }
            return false;
        }

    //#endregion
    
    return ( condition === true );
}