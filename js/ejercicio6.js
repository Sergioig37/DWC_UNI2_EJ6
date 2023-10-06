let paises = ["Japón","México","España",  "Reino Unido"];
function separadoSaltoLinea(unArray){
    for(var pais of unArray){
        console.log(pais+"\n");
    }
}

function arrayInverso(unArray){
    let arrayInverso = unArray.reverse();
    arrayInverso.forEach(element => {
        console.log(element+"\n");
    });
}
function alfabeticamenmteOrdenado(unArray){
    console.log(paises.sort().join("\n"));    
}

function addElemento(unArray){
    unArray.unshift("Jamaica");
}
function pushElemento(unArray){
    unArray.push("Libia");
}
function borrarElementoPrincipio(unArray){
    console.log(unArray.shift());
}
function borrarElementoFinal(unArray){
    console.log(unArray.pop());
}

separadoSaltoLinea(paises);
arrayInverso(paises);
alfabeticamenmteOrdenado(paises);
addElemento(paises);
console.log(paises);
pushElemento(paises);
console.log(paises);
borrarElementoPrincipio(paises);
console.log(paises);
borrarElementoFinal(paises);
console.log(paises);