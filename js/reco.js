
obtenerArray = sessionStorage.getItem('recomendacion');
arrayRecomendacion = JSON.parse(obtenerArray);


let botonn = document.getElementById('boton');
botonn.addEventListener('click', () => {
    arrayRecomendacion.forEach(element => {
        console.log(element.nombre);
    });
})

// se crean las tarjetas cuando carga el DOM 
document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < arrayRecomendacion.length; i++) {
        let galeryCard = document.getElementById('galery-card');

        let contenedorTarjeta = document.createElement('div');
        contenedorTarjeta.className = ("contenedor-tarjeta");
        galeryCard.appendChild(contenedorTarjeta);

        let card = document.createElement('div');
        card.className = "card bg-body-tertiary";
        card.style.width = "20rem";
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

        let buttonAddCarrito = document.createElement("button");
        buttonAddCarrito.setAttribute('type', 'button');
        buttonAddCarrito.className = ("btn btn-outline-success");
        buttonAddCarrito.id = (`addCarrito${arrayRecomendacion[i].id}`);
        buttonAddCarrito.innerHTML = ("Agregar");
        cardBody.appendChild(buttonAddCarrito);

    }

})