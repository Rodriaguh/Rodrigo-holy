/* EJERCICIO 6
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function Ejercicio6(params) {
    
let numero = prompt("Ingrese un numero par o impar");

console.log("El usuario ingreso: " + numero)

if (isNaN(numero)){
    console.log("Dato invalido, borrar la cuenta")
}
else if(numero % 2 == 0){
    console.log(numero + " es par")
}
else{
     console.log(numero + " es impar")
}
}