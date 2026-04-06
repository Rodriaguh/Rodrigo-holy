/*EJERCICIO 7
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

function Ejercicio7(params) {
var texto = prompt("Ingrese texto formada por mayusculas, minuscula o mixto")

  
        if (texto == texto.toUpperCase()){
            console.log("Texto hecho por mayusculas")
        }
        else if( texto == texto.toLowerCase()){
            console.log("Texto hecho por minusculas")
        }
        else{
            console.log("Texto mixeado con mayusculas y minusculas")
        }
    
}