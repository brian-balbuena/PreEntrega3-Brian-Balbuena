// traigo del localStorage la base de datos para poder usarlas 
let productos = localStorage.getItem("plantas");
let productosLocal = JSON.parse(productos);

// capturo datos personales
let nombreFocus = document.getElementById("nombre");
let edad = document.getElementById('edad');
 mail = document.getElementById('mail');
nombreFocus.focus();

// capturo opciones
let viviCasa = document.getElementById('casa');
let viviDepto = document.getElementById('departamento');

let ubiInterior = document.getElementById('interior');
let ubiExterior = document.getElementById('exterior');

let propoHuerta = document.getElementById('huerta');
let propoDeco = document.getElementById('deco');


