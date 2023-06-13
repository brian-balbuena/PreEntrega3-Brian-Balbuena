

// capturo boton recomendación 
let botonEnviar = document.getElementById('buscarReco');

botonEnviar.addEventListener("click", () => {
    // evito la recarga de pagina
    // tengo que meterlo en el click del botton para poder capturar los valores del input nombre
    let form = document.getElementById('form');
    let nom;
    form.addEventListener('submit', (event) => {
        event.preventDefault(); //utilizo este metodo para evitar la recarga de la pagina por defaul del form 

        const nombre = document.getElementById("nombre");
        nom = nombre.value; // traigo el nombre ingresado en el input nombre

        //valido que los camppos esten llenos 
        if (nombre.value == "" || edad.value == "" || mail.value == "") {
            alert("Si quiere recibir una planilla de recomendación de su planta, por favor complete los campos obligatorios ")
        } else {
            arrayRecom = []; // array donde se va a guardar todas las recomendaciones       
            for (let i = 0; i < basePlantas.length; i++) {
                if (Array.isArray(basePlantas[i].vivienda)) {  //si vivienda tiene un array entra 
                    let obj = basePlantas[i];
                    let arr = obj.vivienda;

                    for (let j = 0; j < arr.length; j++) {
                        // console.log (arr[j]);
                        if (arr[j] === vivienda() && basePlantas[i].ubicacion === ubicacion() && basePlantas[i].proposito === proposito()) {
                            arrayRecom.push(basePlantas[i]);
                        }
                    }
                } else { //si no hay array dentro del objeto, graba.
                    // console.log( productosLocal[i].vivienda);
                    if (basePlantas[i].vivienda === vivienda() && basePlantas[i].ubicacion === ubicacion() && basePlantas[i].proposito === proposito()) {
                        arrayRecom.push(basePlantas[i]);
                    }
                }
            }
            // si tiene mas de 5 recomendaciones en la base de datos, recorto y le mando 5 opciones random de las recomendaciones
            if (arrayRecom.length > 5) {
                //tengo crear las planillas con estos datos 
                crearTarjeta(recorteArray(arrayRecom), nom);
            } else {
                //creo las planillas con el primer array
                crearTarjeta(arrayRecom, nom);
            }
            // boton volver al formulario
            let volverFormulario = document.getElementById('recomendacion-icono-form');
            volverFormulario.addEventListener("click", () => {
                location.reload()
            })
        }
    });
    // cuando se carga completamente las recomendacion el scroll va al pixel 0
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // arrayCompras.forEach(element => {
    //     console.log(element.nombre);
    // });
   
});































