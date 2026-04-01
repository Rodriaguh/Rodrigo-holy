/* EJERCICIO 10
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el
número de apariciones de dicha suma, repitiendo 36.000 veces esta operación. *//* preguntar*/

var resultados = new Array(13).fill(0); // Array para contar las apariciones de cada suma (2 a 12)
for (var i = 0; i < 36000; i++) 
    {
    var dado1 = Math.floor(Math.random() * 6) + 1; // Lanzamiento del primer dado
    var dado2 = Math.floor(Math.random() * 6) + 1; // Lanzamiento del segundo dado
    var suma = dado1 + dado2; // Suma de los dos dados
    resultados[suma]++; // Incrementar el contador de la suma obtenida
}

// Mostrar el número de apariciones de cada suma
for (var j = 2; j <= 12; j++) {
    console.log("La suma " + j + " apareció " + resultados[j] + " veces.");
}

