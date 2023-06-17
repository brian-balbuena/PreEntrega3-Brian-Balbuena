// traigo los array del localStorage 
obtenerArray = sessionStorage.getItem('recomendacion');
arrayRecomendacion = JSON.parse(obtenerArray);

datosArray = sessionStorage.getItem('infopersonal');
arrayDatosPersonales = JSON.parse(datosArray);
nombreUser = arrayDatosPersonales[0].nombre;
mailUser = arrayDatosPersonales[0].mail;

// usuarios registrados 
let userLogin = [];

let botonn = document.getElementById('boton');
botonn.addEventListener('click', () => {
  // arrayDatosPersonales.forEach(element => {
  //     console.log(element.nombre);
  //     console.log(element.mail);
  // });


})


// se crean las tarjetas cuando carga el DOM 
document.addEventListener('DOMContentLoaded', () => {

  // cree un usuario la primera vez que se abre la pagina 
  if (localStorage.getItem('usuarios') == null) {
    let info1 = {
      mail: "brian@brian",
      nombre: "brian",
      password: 4545,
      estado: 0,
    }
    let nuevoUsuario = new Newuser(info1);
    usuarios.push(nuevoUsuario, 'userarioActivo');

    let usuariosLocal = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosLocal);
  }

  // verifico si al momento de cargar la pagina hay alguna sessin abierta 
  if (sessionStorage.getItem('userarioActivo') != null) {
    // cambio el icono de login 
    let remover = document.getElementById('remover');
    remover.remove();
    let iconoLogin = document.getElementById('iconUser');
    // Crear los elementos necesrios para cambiar el icono del ususario
    // let buttonUser = document.getElementById('button-registro');
    // buttonUser.id = ("usuario-activo");
    let pathElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement1.setAttribute("d", "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z");
    iconoLogin.appendChild(pathElement1);
    let pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement2.setAttribute("d", "M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z");
    iconoLogin.appendChild(pathElement2);
  } else {
    console.log("no hay session")
  }

  // se crean las tarjetas de recomendacion que trae desde el form 
  for (let i = 0; i < arrayRecomendacion.length; i++) {
    let galeryCard = document.getElementById('galery-card');

    let contenedorTarjeta = document.createElement('div');
    contenedorTarjeta.className = ("contenedor-tarjeta");
    galeryCard.appendChild(contenedorTarjeta);

    let card = document.createElement('div');
    card.className = "card bg-body-tertiary";
    card.style.width = "21rem";
    contenedorTarjeta.appendChild(card);

    let imgShopRecomendacion = document.createElement('img');
    imgShopRecomendacion.src = `${arrayRecomendacion[i].img}`;
    imgShopRecomendacion.className = ("card-img-top");
    card.appendChild(imgShopRecomendacion);

    let cardBody = document.createElement('div');
    cardBody.className = ("card-body");
    card.appendChild(cardBody);

    let tituloCard = document.createElement('h5');
    tituloCard.className = ("card-title text-center");
    tituloCard.innerHTML = (`${arrayRecomendacion[i].nombre}`);
    cardBody.appendChild(tituloCard);

    let precioCard = document.createElement("p");
    precioCard.className = ("card-text text-center");
    precioCard.innerHTML = ("$0000"); // falta grabar precio en base de datos
    cardBody.appendChild(precioCard);

    let divButton = document.createElement('div');
    divButton.className = "input-group mb-3";
    divButton.id = "inputAdd";
    cardBody.appendChild(divButton);

    let inputAdd = document.createElement('input');
    inputAdd.setAttribute('type', 'number');
    inputAdd.className = ("form-control");
    inputAdd.setAttribute('placeholder', "1");
    inputAdd.setAttribute('aria-label', "Recipient's username");
    inputAdd.setAttribute('aria-describedby', 'button-addon2');
    divButton.appendChild(inputAdd);

    let buttonAddCarrito = document.createElement("button");
    buttonAddCarrito.setAttribute('type', 'button');
    buttonAddCarrito.className = ("btn btn-outline-success");
    buttonAddCarrito.id = (`addCarrito${arrayRecomendacion[i].id}`);
    buttonAddCarrito.innerHTML = ("Agregar");
    divButton.appendChild(buttonAddCarrito);
  }
})

// activo el login
let registro = document.getElementById('card-registro');
let buttonRegistro = document.getElementById('button-registro');
buttonRegistro.addEventListener('click', () => {

  if (sessionStorage.getItem('userarioActivo') == null) {
    registro.style.display = "flex";
    // evito el scroleo 
    let body = document.getElementsByTagName('body')[0];
    // Guarda la posición actual de desplazamiento
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Establece la posición de desplazamiento a la posición guardada
    window.onscroll = () => {
      window.scrollTo(0, scrollPosition);
    };
    // Agrega el estilo "overflow: hidden" al <body>
    body.style.overflow = 'hidden';


  } else {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    // usuo el sweetalert2 para crear un mini menu para la session 
    let datosSesion = sessionStorage.getItem('userarioActivo');
    let arraySesion = JSON.parse(datosSesion);
    swalWithBootstrapButtons.fire({
      text: `Hola ${arraySesion.nombre}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'cerrar sesión',
      cancelButtonText: '<- volver',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          text: `Estas seguro que queres cerrar sesión?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'si',
          cancelButtonText: '<- volver',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            sessionStorage.removeItem('userarioActivo'),
              location.reload()

          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            timerProgressBar: true
          }

        })  
      } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          timerProgressBar: true
      } 
    })
  }
})