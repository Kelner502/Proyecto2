// ESTA CONSTANTE ME MOSTRAR A TRAVES DE UN ID LOS NUMEROE EN UNA ETIQUETA DE PARRAFO.
const contador = document.getElementById("contar");
// ESTA CONSTATNTE LLAMA AL BOTOT SUMAR ATRAVES DE UN SELECTORR DE TIPO ID
const suma = document.getElementById("incr");
// ESTA CONSTATNTE LLAMA AL BOTOT SUMAR ATRAVES DE UN SELECTORR DE TIPO ID
const resta = document.getElementById("decr");
// ESTA CONSTATNTE LLAMA AL BOTOT SUMAR ATRAVES DE UN SELECTORR DE TIPO ID
const reset = document.getElementById("reset");

let numero = 0;


// COMANDO PARA  INCREMENTAR UN BALOR AL MOMENTODE PRECIONARUN BOTON

suma.addEventListener("click", ()=>{
    numero ++;
    contador.innerHTML = numero;
// A TRAVES DE UNA FUNCION IF LLAMO ALOS COLORES DE CADA NUMERO 
if (numero==0) {

    document.getElementById("contar").style.color ="#FFD700";
// A TRAVES DE UN ELSE IF AGO QUE MIENTRAS NO SE ME CUMPLA LA FUNCION IF SE ME CUMPLIRA LO QUE TIENE ELSE IF.
} else if (numero>0) {

    document.getElementById("contar").style.color ="#17ff00";
}
});

// COMANDO PARA RECETIAR EL CONTADOR A VALOR 0  //////////////////

reset.addEventListener("click", ()=>{
//SI EL CONTADOR O NUMERO ESTA EN 0 SE MOSTRAR DE UN COLOR AMARILLO 
    numero = 0;
    contador.innerHTML = numero;
 document.getElementById("contar").style.color ="#FFD700";

});

//COMANDO PARDECREMENTAR Y QUE EMPIESEDE 0,-1,-2,-3,-4///////////////

resta.addEventListener("click", ()=>{
    numero = numero - 1;
    contador.innerHTML = numero;
// ATRAVES DE UNA FUNCION IF LLAMO A LOS COLORES DEL NUMERO NEGATIVO Y SE PONDRAN DE COLOR ROJO.
    if (numero==0) {

        document.getElementById("contar").style.color ="#FFD700";
    } else if (numero<0) {
//A TRAVES DE UN ELSE IF ME MOSTRAR EL COLOR AMARILLO EN CASO DE QUE LA FUNCION IF NO SE CUMPLA. 
        document.getElementById("contar").style.color ="#ff0000";
    }

});
