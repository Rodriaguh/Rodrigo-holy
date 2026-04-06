/* EJERCICIO 10
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el
número de apariciones de dicha suma, repitiendo 36.000 veces esta operación. *//* preguntar*/

let resultado = 0
function Ejercicio10(params) {
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(var i = 0; i <36000; i++){
    let dado1 = Math.floor(Math.random() * 6) + 1; 
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2
    arr[suma] = arr[suma] + 1
    }
    console.log(arr);

    for(let j = 2; j < 13; j++){
        console.log("El numero "+ j +" salio : "+arr[j]+ " veces")
    }

}