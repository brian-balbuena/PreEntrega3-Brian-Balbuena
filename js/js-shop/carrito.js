let shopCarrito = document.getElementById('button-carrito');
shopCarrito.addEventListener('click', () => {
    // traigo la sessionStorage 
    let datosSesion = sessionStorage.getItem('recomendacion');
    let arraySesion = JSON.parse(datosSesion);
    // habilito carrito 
     carrito = document.getElementById('carrito');
    carrito.style.display = "flex";

    carrito = [];

    if (sessionStorage.getItem('userarioActivo') != null) {
        console.log("hay usuario activo")
        let userActivo = sessionStorage.getItem('userarioActivo');
        let dataUsuario = JSON.parse(userActivo);
        carrito = [...arraySesion, {...dataUsuario}]
    }else {
        carrito = [...arraySesion]
        console.log('no hay usuario activo')
    }
  
console.log(carrito)
    for (let i = 0; i < carrito.length-1; i++) {
        let carritoProducto = document.getElementById('carrito-productos');

        let tbodyCarrito = document.createElement('tbody');
        carritoProducto.appendChild(tbodyCarrito);

        // Crear elementos y asignar atributos
        const tr = document.createElement('tr');
        tr.className = ('productos-filas');
        tbodyCarrito.appendChild(tr);

        const tdFoto = document.createElement('td');
        tdFoto.className = ('productos-foto');
        tr.appendChild(tdFoto);

        const img = document.createElement('img');
        img.className = ('foto');
        img.src = `${carrito[i].img}`;
        tdFoto.appendChild(img);

        const tdNombre = document.createElement('td');
        tdNombre.innerHTML = `${carrito[i].nombre}`;
        tr.appendChild(tdNombre);

        const tdCantidad = document.createElement('td');
        tr.appendChild(tdCantidad);

        const divInputGroup = document.createElement('div');
        divInputGroup.className = ('input-group');
        tdCantidad.appendChild(divInputGroup);

        const botonRestar = document.createElement('button');
        botonRestar.id = `carrito-boton-restas${carrito[i].ID}`;
        botonRestar.className = ('btn', 'btn-outline-secondary');
        botonRestar.type = 'button';
        botonRestar.innerHTML = '-';
        divInputGroup.appendChild(botonRestar);

        const inputCantidad = document.createElement('input');
        inputCantidad.id = `carrito-contador${carrito[i].ID}`;
        inputCantidad.type = 'number';
        inputCantidad.className = ('contador form-control');
        inputCantidad.placeholder = '1';
        divInputGroup.appendChild(inputCantidad); 

        const botonSumar = document.createElement('button');
        botonSumar.id = 'carrito-boton-sumar';
        botonSumar.className = ('btn', 'btn-outline-secondary');
        botonSumar.type = 'button';
        botonSumar.innerHTML = '+';
        divInputGroup.appendChild(botonSumar);

        const tdPrecio = document.createElement('td');
        tdPrecio.id = `precio${carrito[i].ID}`;
        tdPrecio.textContent = `$${carrito[i].precio}`;
        tr.appendChild(tdPrecio);
    }


    // boton volver 
    let volver = document.getElementById('volver-shop')
    volver.addEventListener('click', () => {
        let carrito = document.getElementById('carrito');
        carrito.style.display = "none";
    })

})