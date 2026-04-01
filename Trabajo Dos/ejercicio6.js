/* EJERCICIO 6
Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.*/
var numero = prompt("Ingrese un número entero para determinar si es par o impar");

function esParOImpar(num)
    {
    if (num % 2 === 0)
        {
        return "El número " + num + " es par.";
    }
    else
        {
        return "El número " + num + " es impar.";
    }
}
var resultado = esParOImpar(numero);
console.log(resultado);