
let shopCarrito = document.getElementById('button-carrito');
shopCarrito.addEventListener('click', () => {


    if (JSON.parse(sessionStorage.getItem('carrito'))) {

    }
    // traigo la sessionStorage 
    let datosCarrito = sessionStorage.getItem('carrito');
    let arrayCarrito = JSON.parse(datosCarrito);
    // habilito carrito 
    carrito = document.getElementById('carrito');
    carrito.style.display = "flex";


    // falta unir el carrito con los datos de session 
    // if (sessionStorage.getItem('userarioActivo') != null) {
    //     console.log("hay usuario activo")
    //     let userActivo = sessionStorage.getItem('userarioActivo');
    //     let dataUsuario = JSON.parse(userActivo);
    //     carrito = [...arraySesion, { ...dataUsuario }]
    // } else {
    //     carrito = [...arraySesion]
    //     console.log('no hay usuario activo')
    // }


    // permito simular la compra aunque no tenga la session iniciada 
    for (let i = 0; i < arrayCarrito.length; i++) {
        let carritoProducto = document.getElementById('carrito-productos');

        let tbodyCarrito = document.createElement('tbody');
        tbodyCarrito.id = `tbodyCarrito${arrayCarrito[i].ID}`;
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
        img.src = `${arrayCarrito[i].img}`;
        tdFoto.appendChild(img);

        const tdNombre = document.createElement('td');
        tdNombre.innerHTML = `${arrayCarrito[i].nombre}`;
        tr.appendChild(tdNombre);

        const tdCantidad = document.createElement('td');
        tr.appendChild(tdCantidad);

        const divInputGroup = document.createElement('div');
        divInputGroup.className = ('input-group');
        tdCantidad.appendChild(divInputGroup);

        const botonRestar = document.createElement('button');
        botonRestar.id = `carrito-boton-restas${arrayCarrito[i].ID}`;
        botonRestar.className = ('btn', 'btn-outline-secondary');
        botonRestar.type = 'button';
        botonRestar.innerHTML = '-';
        divInputGroup.appendChild(botonRestar);

        const inputCantidad = document.createElement('p');
        inputCantidad.id = `carrito-contador${arrayCarrito[i].ID}`;
        inputCantidad.className = ('input-cantidad');
        inputCantidad.innerHTML = (`${arrayCarrito[i].cantidad}`);
        divInputGroup.appendChild(inputCantidad);

        const botonSumar = document.createElement('button');
        botonSumar.id = `carrito-boton-sumar${arrayCarrito[i].ID}`;
        botonSumar.className = ('btn', 'btn-outline-secondary');
        botonSumar.type = 'button';
        botonSumar.innerHTML = '+';
        divInputGroup.appendChild(botonSumar);

        const tdSimbolo = document.createElement('td');
        tdSimbolo.id = `simbolo${arrayCarrito[i].ID}`;
        tdSimbolo.textContent = '$';
        tr.appendChild(tdSimbolo);

        const tdPrecio = document.createElement('td');
        tdPrecio.id = `precio${arrayCarrito[i].ID}`;
        let precio = parseInt(arrayCarrito[i].precio) * parseInt(arrayCarrito[i].cantidad);
        tdPrecio.textContent = `${precio}`;
        tr.appendChild(tdPrecio);


        let carritoRestar = document.getElementById(`carrito-boton-restas${arrayCarrito[i].ID}`);
        carritoRestar.addEventListener('click', () => {
            let inputCarrito = document.getElementById(`carrito-contador${arrayCarrito[i].ID}`);
            let pantallaPrecio = document.getElementById(`precio${arrayCarrito[i].ID}`);
            // si el contador llega a 0 el button pasa a se disabled 
            if (inputCarrito.innerHTML == 1) {
                carritoRestar.disabled = true;
            }
            // si el button es mayor a cero resta 1
            inputCarrito.innerHTML = parseInt(inputCarrito.innerHTML) - 1;
            let precioResta = parseInt(`${pantallaPrecio.textContent}`) - parseInt(arrayCarrito[i].precio);
            pantallaPrecio.textContent = `${precioResta}`;
        })

        let carritoSuma = document.getElementById(`carrito-boton-sumar${arrayCarrito[i].ID}`);
        carritoSuma.addEventListener('click', () => {
            let inputCarrito = document.getElementById(`carrito-contador${arrayCarrito[i].ID}`);
            let pantallaPrecio = document.getElementById(`precio${arrayCarrito[i].ID}`);
            // desactivo el disabled del boton restar 
            if (inputCarrito.innerHTML >= 0) {
                carritoRestar.disabled = false;
            }
            // hago la suma 
            inputCarrito.innerHTML = parseInt(inputCarrito.innerHTML) + 1;
            let precioSuma = parseInt(`${pantallaPrecio.textContent}`) + parseInt(arrayCarrito[i].precio);
            pantallaPrecio.textContent = `${precioSuma}`;
        })

    }

    //falta corregir el boton volver y crear la tabla de suma 
    // boton volver 
    let volver = document.getElementById('volver-shop')
    volver.addEventListener('click', () => {
        let carrito = document.getElementById('carrito');
        // for (let i = 0; i < arrayCarrito.length; i++) {
        //     let bodyCarrito = document.getElementById(`tbodyCarrito${arrayCarrito[i].ID}`);
        //     bodyCarrito.remove();
        // }

        carrito.style.display = "none";
    })

})