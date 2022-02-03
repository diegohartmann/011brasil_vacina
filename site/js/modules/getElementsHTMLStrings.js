export function getSinglePersonHTML(_person, _extraClass = ''){
    return `
    <li class="pessoa ${_extraClass}">
        <span>${_person.nome}</span>
        <span>${_person.idade}</span>
        <span>${_person.areaDeAtuacao}</span>
    </li>
    `
}
const title = {
    nome:'Nome',
    idade:'Idade',
    areaDeAtuacao:'Função',
}
export function getTableTitle(){
    return getSinglePersonHTML(title, 'titulo');
}

export function getDayGroupHTML(_index, _peopleListHTMLString){
    return `
    <div class="dia">
        <h6>Dia ${_index + 1}</h6>
        <ul class="lista-de-pessoas">
        
            ${_peopleListHTMLString}

        </ul>
    </div>
    
    `
}