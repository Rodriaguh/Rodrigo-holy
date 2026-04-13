/*EJERCICIO 9
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que
muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el
método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el
método asignar().
Crear los obetos y casos de prueba necesarios para comprobar el correcto funcionamiento
de la jerarquía. */

function ejercicio9(params) 
 { 
    let p1 = new Persona("Ana", "femenino", 18)
    console.log(p1.obtDetalles())

    let p2 = new Estudiante("Jose Manuel", 15, "Masculino", "4to", "1A") 
     console.log(p2.obtDetalles())
    console.log(p2.registrar())

    let p3 = new Profesor("Maximo", 35, "masculino", "inteligencia", "secundaria")
    console.log(p3.asignar())
 }


 /* -------PERSONA-------*/
function Persona(nombre, edad, genero)
 {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
 }

 Persona.prototype.obtDetalles = function()
 {
    console.log(`Nombre: ${this.nombre}, Edad:${this.edad}, Genero: ${this.genero}`)
 }

 /* -------ESTUDIANTE-------*/
 function Estudiante(nombre, edad,genero,curso,grupo)
 {
      Persona.call(this, nombre, edad, genero)
    this.curso = curso
    this.grupo = grupo
 }

Estudiante.prototype = Object.create(Persona.prototype)
Estudiante.prototype.constructor = Estudiante

Estudiante.prototype.registrar = function() 
 {
    console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}`)
 }

 /* -------PROFESOR-------*/
function Profesor (nombre, edad, genero, asignatura, nivel)
 {
    Persona.call(this, nombre, edad, genero)
    this.asignatura = asignatura
    this.nivel = nivel
 }

Profesor.prototype = Object.create(Persona.prototype)
Profesor.prototype.constructor = Profesor

Profesor.prototype.asignar = function()
 {
    console.log(`El profesor ${this.nombre} dictará la asignatura ${this.asignatura} para el nivel ${this.nivel}.`)
 }

