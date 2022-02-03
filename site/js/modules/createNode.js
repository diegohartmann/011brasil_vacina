export default function createNode(_htmlString){
    const temp = document.createElement('div');
    temp.innerHTML = _htmlString.trim();
    return temp.firstChild;
}