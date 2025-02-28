let nombre = prompt("¿Cual es tu nómbre?");
let edad = prompt("¿Cúantos años tienes?");
let lenguaje = prompt("¿Qué lenguajes de programación has estudiado?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

let lenguaje2 = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if (lenguaje2 == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (lenguaje2 == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}