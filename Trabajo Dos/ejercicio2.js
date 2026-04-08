/*EJERCICIO 2
A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios",
2];
Determinar cual de los dos elementos de texto es mayor
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
elementos numéricos */
function Ejercicio2(params) {
    var valores = [true, 5, false, "hola", "adios",2];

var palabra = prompt("Ingrese una palabra");

if (palabra > valores[3]) 
    {
    console.log("La palabra ingresada es mayor que " + valores[3]);
    console.log(valores[0]);
}else {
    console.log("La palabra ingresada es menor que " + valores[3]);
    console.log(valores[3]);
}

console.log("El resultado de la suma entre los dos elementos numéricos es: " + (valores[1] + valores[5]));

console.log("El resultado de la resta entre los dos elementos numéricos es: " + (valores[1] - valores[5]));

console.log("El resultado de la multiplicación entre los dos elementos numéricos es: " + (valores[1] * valores[5]));

console.log("El resultado de la división entre los dos elementos numéricos es: " + (valores[1] / valores[5]));

console.log("El resultado del módulo entre los dos elementos numéricos es: " + (valores[1] % valores[5]));

}
