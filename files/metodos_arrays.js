var equipos = ["Real Madrid", "Barcelona", "Atletico de Madrid"]
var array = new Array("Juan", "Ana")

console.log("1)", equipos)
console.log("2)", array)

// Metodo concat
var todos = equipos.concat(array)
console.log("3)", todos)

// Metodo indexOf
let rm = equipos.indexOf("Real Madrid")
console.log("4)", rm)

// Metodo join
var juntos = equipos.join(" - ")
console.log("5)", juntos)

// Metodo push (meter al final)
console.log("6)", array)
array.push("Luis")
console.log("7)", array)

// Metodo pop (sacar el ultimo)
array.pop("Luis")
console.log("8)", array)

// Metodo shift (sacar el primero)
let first = array.shift()
console.log("9)", array)

// Metodo unshift (meter al principio)
let last = array.unshift(first)
console.log("10)", array)

// Metodo reverse
var reves = array.reverse()
console.log("11)", reves)

// Metodo sort
var ordenados = equipos.sort()
console.log("12)", ordenados)

// Metodo slice
var numeros = [1, 2, 3, 4, 5, 6]
let dos = numeros.slice(0,2) // inicio y final (no incluido)
console.log("13)", dos)
console.log("14)", numeros) // se mantiene igual

// Metodo splice
let mitad = numeros.splice(0,3) // inicio y final (no incluido)
console.log("15)", mitad)
console.log("16)", numeros) // se ha modificado

// Metodo toString
let jugadores = ["Alex", "Juan", "Tomy", "John"]
let nombres = jugadores.toString()  // join(",")
console.log("17)", nombres)