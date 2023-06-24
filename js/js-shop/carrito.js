
let shopCarrito = document.getElementById('button-carrito');
shopCarrito.addEventListener('click', () => {

    // traigo la sessionStorage 
    let datosCarrito = sessionStorage.getItem('carrito');
    let arrayCarrito = JSON.parse(datosCarrito);
    // habilito carrito 
    carrito = document.getElementById('carrito');
    carrito.style.display = "flex";

    let precioTotal = 0;

    // permito simular la compra aunque no tenga la session iniciada 
    for (let i = 0; i < arrayCarrito.length; i++) {
        let carritoPrincipal = document.getElementById('carrito-productos');

        const tbodyCarrito = document.createElement('tbody');
        tbodyCarrito.id = `tbodyCarrito${arrayCarrito[i].ID}`;
        tbodyCarrito.className = ('body-carrito')
        carritoPrincipal.appendChild(tbodyCarrito);

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

        // total 
        carritoTotal = document.getElementById('carrito-total');

        const trTotal = document.createElement('tr');
        trTotal.className = ('body-total');
        carritoTotal.appendChild(trTotal);

        const tdNombreTotal = document.createElement('td');
        tdNombreTotal.innerHTML = `${arrayCarrito[i].nombre}`;
        trTotal.appendChild(tdNombreTotal);

        const tdSimboloTotal = document.createElement('td');
        tdSimboloTotal.innerHTML = "$";
        tdSimboloTotal.className = ('simbolo-carrito');
        trTotal.appendChild(tdSimboloTotal);

        const tdPrecioToltal = document.createElement('td');
        tdPrecioToltal.className = ('total-precio');
        tdPrecioToltal.id = `total${arrayCarrito[i].ID}`;
        tdPrecioToltal.innerHTML = `${precio}`;
        trTotal.appendChild(tdPrecioToltal);

        precioTotal = parseInt(precioTotal) + parseInt(`${precio}`);
        // accion de restar 
        let carritoRestar = document.getElementById(`carrito-boton-restas${arrayCarrito[i].ID}`);
        carritoRestar.addEventListener('click', () => {
            let inputCarrito = document.getElementById(`carrito-contador${arrayCarrito[i].ID}`);
            let pantallaPrecio = document.getElementById(`precio${arrayCarrito[i].ID}`);
            let pantallaTotalProductos = document.getElementById(`total${arrayCarrito[i].ID}`);
            let pantallaTotal = document.getElementById('precio-total');
            // si el contador llega a 0 el button pasa a se disabled 
            if (inputCarrito.innerHTML == 1) {
                carritoRestar.disabled = true;
            }
            // hago resta en el icono del carrito
            inputCarrito.innerHTML = parseInt(inputCarrito.innerHTML) - 1;
            //hago logica de resta
            let precioResta = parseInt(`${pantallaPrecio.textContent}`) - parseInt(arrayCarrito[i].precio);
            pantallaPrecio.textContent = `${precioResta}`;
            pantallaTotalProductos.innerHTML = `${precioResta}`;
            precioTotal = precioTotal - parseInt(arrayCarrito[i].precio);
            pantallaTotal.innerHTML = precioTotal;
        })
        // accion de sumar 
        let carritoSuma = document.getElementById(`carrito-boton-sumar${arrayCarrito[i].ID}`);
        carritoSuma.addEventListener('click', () => {
            let inputCarrito = document.getElementById(`carrito-contador${arrayCarrito[i].ID}`);
            let pantallaPrecio = document.getElementById(`precio${arrayCarrito[i].ID}`);
            let pantallaTotalProductos = document.getElementById(`total${arrayCarrito[i].ID}`);
            let pantallaTotal = document.getElementById('precio-total');
            // desactivo el disabled del boton restar 
            if (inputCarrito.innerHTML >= 0) {
                carritoRestar.disabled = false;
            }
            // hago la suma en el icono del carrito
            inputCarrito.innerHTML = parseInt(inputCarrito.innerHTML) + 1;
            // hago la logica de suma 
            let precioSuma = parseInt(`${pantallaPrecio.textContent}`) + parseInt(arrayCarrito[i].precio);
            pantallaPrecio.textContent = `${precioSuma}`;
            pantallaTotalProductos.innerHTML = `${precioSuma}`;
            precioTotal = precioTotal + parseInt(arrayCarrito[i].precio);
            pantallaTotal.innerHTML = precioTotal;
        })

    }

    // creo total y botones 
    const trPrecioTotal = document.createElement('tr');
    trPrecioTotal.className = ('body-total');
    trPrecioTotal.id = ('total')
    carritoTotal.appendChild(trPrecioTotal);

    const tdTotalText = document.createElement('td');
    tdTotalText.innerHTML = 'total';
    trPrecioTotal.appendChild(tdTotalText);

    const tdTotalSimbolo = document.createElement('td');
    tdTotalSimbolo.className = ('simbolo-carrito');
    tdTotalSimbolo.innerHTML = "$";
    trPrecioTotal.appendChild(tdTotalSimbolo);

    const tdTotal = document.createElement('td');
    tdTotal.className = ('total-precio');
    tdTotal.id = "precio-total";
    tdTotal.innerHTML = (`${precioTotal}`);
    trPrecioTotal.appendChild(tdTotal);
    const trButton = document.createElement('tr');
    trButton.className = ('carrito-fin');
    trButton.id = "total-button";
    trButton.setAttribute("colspan", "2");
    carritoTotal.appendChild(trButton);

    const tdButtonVolver = document.createElement('td');
    trButton.appendChild(tdButtonVolver);

    const buttonTotalVolver = document.createElement('button');
    buttonTotalVolver.className = ('btn btn-danger');
    buttonTotalVolver.type = "button";
    buttonTotalVolver.id = "volver-shop";
    buttonTotalVolver.innerHTML = "volver";
    tdButtonVolver.appendChild(buttonTotalVolver);

    const tdButtonFinalizar = document.createElement('td');
    trButton.appendChild(tdButtonFinalizar);

    const buttonTotalFinalizar = document.createElement('button');
    buttonTotalFinalizar.type = "button";
    buttonTotalFinalizar.className = ('btn btn-success');
    buttonTotalFinalizar.id = "finalizarCompra";
    buttonTotalFinalizar.innerHTML = "finalizar compra";
    tdButtonFinalizar.appendChild(buttonTotalFinalizar);




    // boton volver/ borro el carrito para que no aparexca dos veces 
    let volver = document.getElementById('volver-shop')
    volver.addEventListener('click', () => {
        let carrito = document.getElementById('carrito');
        let bodyCarrito = document.querySelectorAll(".body-carrito");
        bodyCarrito.forEach(function (elemento) {
            elemento.remove();
        });

        let bodyCarritoTotal = document.querySelectorAll(".body-total");
        bodyCarritoTotal.forEach(function (elemento) {
            elemento.remove();
        });

        let buttonTotal = document.getElementById('total-button');
        buttonTotal.remove();

        carrito.style.display = "none";

    })

    //boton finalizar compra 
    let buttonFinalizarCompra = document.getElementById('finalizarCompra');
    buttonFinalizarCompra.addEventListener('click', () => {

        let carritoSesion = sessionStorage.getItem('carrito');
        let carrito = JSON.parse(carritoSesion)

        // verifico si al momento de cargar la pagina hay alguna sessin abierta 
        if (sessionStorage.getItem('userarioActivo') != null) {
            let usuarioSesion = sessionStorage.getItem('userarioActivo');
            let usuario = JSON.parse(usuarioSesion);
            carrito = [{ ...carrito }, { ...usuario }];
        
            let timerInterval
            Swal.fire({
                title: `Gracias ${carrito[1].user} por tu compra!`,
                html: 'Derivando a página de cobro...',
                timer: 3000,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    Swal.fire({
                        title: 'GRACIAS!',
                        text: `Gracias por llegar hasta este punto, esto es un simple simulador de ecommerce generado con js puro.`,
                        imageUrl: '../imagenes/dragon-ball.jpg',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        confirmButtonColor: '#14A44D'
                    })
                }
            })

        } else {
            Swal.fire({
                icon: 'info',
                text: 'Por favor inicie session para finalizar la compra',
                footer: '<a href="./shop_recomendacion.html">Volver al shop</a>'
            })
        }
    });
})