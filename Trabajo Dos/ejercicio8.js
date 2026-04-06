/* JERCICIO 8
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural". */

function Ejercicio8(params) {


let FraseLimpia = prompt ("Ingrese una cadean de texto para determinar si es una palindromo")

let strSe = FraseLimpia.replaceAll(" ","").toLowerCase();
let ArrStr = strSe.split("").reverse().join("");


if(strSe == ArrStr){
    console.log("Es palindronomo")
}
else{
    console.log("No es palindronomo")
}

}