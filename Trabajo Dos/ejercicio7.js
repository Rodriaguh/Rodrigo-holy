/*EJERCICIO 7
Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */


var cadena = prompt("Ingrese una cadena de texto");

function analizarCadena(texto)
    {
    if (texto === texto.toUpperCase()) 
        {
        return "La cadena está formada sólo por mayúsculas.";
    } 
    else if (texto === texto.toLowerCase()) 
        {
        return "La cadena está formada sólo por minúsculas.";
    }
    else
        {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
}

var resultado = analizarCadena(cadena);
console.log(resultado);