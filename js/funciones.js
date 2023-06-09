// funciones validación campos 
function vivienda() {
    if (viviCasa.checked) {
        return "Casa";
    } else if (viviDepto.checked) {
        return "Depto";
    }
}

function ubicacion() {
    if (ubiInterior.checked) {
        return "Interior";
    } else if (ubiExterior.checked) {
        return "Exterior";
    }
}

function proposito() {
    if (propoHuerta.checked) {
        return "Huerta";
    } else if (propoDeco) {
        return "Deco";
    }
}

function recorteArray(array) {
    let arrayRecorte = [];
    while (arrayRecorte.length < 5) {
        indiceRandom = Math.floor(Math.random() * array.length);

        if (!arrayRecorte.includes(array[indiceRandom])) {
            arrayRecorte.push(array[indiceRandom]);
        }
    }
    return arrayRecorte;
}


// creo la pagina que se va a mostrar con las recomendaciones
function crearTarjeta(array, nombre) {

    const firstChild = document.body.firstChild;

    const sectionPrincipal = document.createElement('section');
    sectionPrincipal.id = "recomendacion";
    sectionPrincipal.className = "tarjeta-recomendacion container-fluid fw-bold";
    // document.body.appendChild(sectionPrincipal);
    document.body.insertBefore(sectionPrincipal, firstChild); //lo inserto al principio

    const sectionHeader = document.createElement('section');
    sectionHeader.className = "recomendacion-header";
    sectionPrincipal.appendChild(sectionHeader);

    const tituloSection = document.createElement('h2');
    tituloSection.className = "tituloseccion";
    tituloSection.innerHTML += 'mi PLANta';
    sectionHeader.appendChild(tituloSection);

    const parrafoHeader = document.createElement('p');
    parrafoHeader.className = "recomendacion-header-texto";
    parrafoHeader.innerHTML += ` <font size="4.5rem">${nombre}</font> estas son las plantas que seleccionamos para vos.<br>
        Acordate que tenemos un shop donde podes adquir tus plantas, accesorios y mucho mas.`;
    sectionHeader.appendChild(parrafoHeader);

    // creo las tarjetas de recomendacion 
    for (let i = 0; i < array.length; i++) {

        const sectionBody = document.createElement('section');
        sectionBody.className = "tarjeta-recomendacion-body";
        sectionPrincipal.appendChild(sectionBody);

        const contenedorImg = document.createElement('div');
        contenedorImg.className = "tarjeta-recomendacion-imagen";
        sectionBody.appendChild(contenedorImg);

        const imgRecomendacion = document.createElement('img');
        imgRecomendacion.className = "img-dinamica";
        imgRecomendacion.src = `${array[i].img}`; //grabo la ruta de la imagen desde el array
        contenedorImg.appendChild(imgRecomendacion);

        const tarjRecoHead = document.createElement('div');
        tarjRecoHead.className = "tarjeta-recomendacion-head";
        sectionBody.appendChild(tarjRecoHead);

        const recomenTitulo = document.createElement('h3');
        recomenTitulo.className = "recomendacion-titulo";
        recomenTitulo.innerHTML += `${array[i].nombre}`; //grabo nombre desde el array
        tarjRecoHead.appendChild(recomenTitulo);

        const recomenSubTitulo = document.createElement('h5');
        recomenSubTitulo.className = "recomendacion-subtitulo";
        recomenSubTitulo.innerHTML += `Propiedades`;
        tarjRecoHead.appendChild(recomenSubTitulo);

        const parrafoBody = document.createElement('p');
        parrafoBody.className = "recomendacion-body";
        parrafoBody.innerHTML += `${array[i].propiedades}`; //grabo las propiedades desde el array
        tarjRecoHead.appendChild(parrafoBody);


        const recomenSkills = document.createElement('div');
        recomenSkills.className = "recomendacion-skills";
        sectionBody.appendChild(recomenSkills);

        // const recomenShop = document.createElement('div');
        // recomenShop.className = "recomendacion-shop";
        // recomenSkills.appendChild(recomenShop);

        // const botonIrShop = document.createElement('button');
        // botonIrShop.setAttribute('type', 'button');
        // botonIrShop.className = "btn btn-outline-success";
        // botonIrShop.id = "boton-verShop";
        // botonIrShop.textContent = "Ver en SHOP";
        // recomenShop.appendChild(botonIrShop);
        // const logoshop = document.createElement('i');
        // logoshop.className = "bi bi-shop";
        // botonIrShop.appendChild(logoshop);

        const recomenCarrito = document.createElement('div');
        recomenCarrito.className = "recomendacion-carrito";
        recomenSkills.appendChild(recomenCarrito);

        const contenedorBotonAdd = document.createElement('div');
        contenedorBotonAdd.className = "input-group mb-3";
        recomenCarrito.appendChild(contenedorBotonAdd);

        // const recomenInputCarrito = document.createElement('input');
        // recomenInputCarrito.setAttribute('type', 'number');
        // recomenInputCarrito.className = "recomendacion-carrito-input form-control-sm";
        // recomenInputCarrito.id = "recomendacion-carrito-agregar";
        // recomenInputCarrito.value = "1";
        // recomenInputCarrito.setAttribute('aria-label', 'Recipient username');
        // recomenInputCarrito.setAttribute('aria-describedby', 'aria-describedby');
        // contenedorBotonAdd.appendChild(recomenInputCarrito);

        const botonAddShop = document.createElement('button');
        botonAddShop.setAttribute('type', 'button');
        botonAddShop.className = "btn btn-success";
        botonAddShop.id = `botonadd${array[i].ID}`;
        botonAddShop.textContent = "quitar recomendación";
        contenedorBotonAdd.appendChild(botonAddShop);


        const bottonCambiar = document.getElementById(`botonadd${array[i].ID}`);
        bottonCambiar.addEventListener("click", () => {

            if (botonAddShop.className === "btn btn-success") {
                botonAddShop.className = "btn btn-danger";
                botonAddShop.textContent = "agregar a recomendación";
            } else {
                botonAddShop.className = "btn btn-success";
                botonAddShop.textContent = "quitar recomendación";
            }

        })
    }
    // le agrego un footer
    const recomenFooter = document.createElement('section');
    recomenFooter.className = "recomendacion-footer";
    sectionPrincipal.appendChild(recomenFooter);

    const recomenFooterContacto = document.createElement('div');
    recomenFooterContacto.className = "footer-contacto container d-flex";
    recomenFooter.appendChild(recomenFooterContacto);

    const footerLinkFace = document.createElement('a');
    footerLinkFace.href = "./arreglo.htm";
    footerLinkFace.className = "logo-facebook";
    recomenFooterContacto.appendChild(footerLinkFace);

    const svgFacebook = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgFacebook.setAttribute('width', '25');
    svgFacebook.setAttribute('height', '25');
    svgFacebook.setAttribute('fill', 'currentColor');
    svgFacebook.classList.add('bi', 'bi-facebook');
    svgFacebook.setAttribute('viewBox', '0 0 16 16');
    footerLinkFace.appendChild(svgFacebook);

    const pathFacebook = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathFacebook.setAttribute('d', 'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z');
    svgFacebook.appendChild(pathFacebook);

    const footerLinkInsta = document.createElement('a');
    footerLinkInsta.href = "./arreglo.htm";
    footerLinkInsta.className = "logo-instagram";
    recomenFooterContacto.appendChild(footerLinkInsta);

    const svgInsta = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgInsta.setAttribute('width', '25');
    svgInsta.setAttribute('height', '25');
    svgInsta.setAttribute('fill', 'currentColor');
    svgInsta.classList.add('bi', 'bi-instagram');
    svgInsta.setAttribute('viewBox', '0 0 16 16');
    footerLinkInsta.appendChild(svgInsta);

    const pathInsta = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathInsta.setAttribute('d', 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z');
    svgInsta.appendChild(pathInsta);


    const footerLinkTwi = document.createElement('a');
    footerLinkTwi.href = "./arreglo.htm";
    footerLinkTwi.className = "logo-twitter";
    recomenFooterContacto.appendChild(footerLinkTwi);

    const svgTwi = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgTwi.setAttribute('width', '25');
    svgTwi.setAttribute('height', '25');
    svgTwi.setAttribute('fill', 'currentColor');
    svgTwi.classList.add('bi', 'bi-twitter');
    svgTwi.setAttribute('viewBox', '0 0 16 16');
    footerLinkTwi.appendChild(svgTwi);

    const pathTwi = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathTwi.setAttribute('d', 'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z');
    svgTwi.appendChild(pathTwi);

    const recomenFooterEnlaces = document.createElement('div');
    recomenFooterEnlaces.className = "recomendacion-footer-enlaces";
    recomenFooter.appendChild(recomenFooterEnlaces);

    const recomenIconoCarrito = document.createElement('a');
    recomenIconoCarrito.id = "recomendacion-icono-carrito";
    recomenIconoCarrito.className = "icon-link icon-link-hover text-center link-success link-underline-success link-underline-opacity-25";
    recomenIconoCarrito.href = "./shop.html";
    recomenIconoCarrito.innerHTML = "SHOP";
    recomenFooterEnlaces.appendChild(recomenIconoCarrito);
    const logoFooterShop = document.createElement('i');
    logoFooterShop.className = "bi bi-cart4";
    recomenIconoCarrito.appendChild(logoFooterShop);

    const svgShop = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgShop.classList.add('bi');
    svgShop.setAttribute('aria-hidden', 'true');
    recomenIconoCarrito.appendChild(svgShop);

    const useShop = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useShop.setAttribute('xlink:href', '#arrow-right');
    svgShop.appendChild(useShop);

    const recomenIconoHome = document.createElement('a');
    recomenIconoHome.id = "recomendacion-icono-home";
    recomenIconoHome.className = "icon-link icon-link-hover text-center link-success link-underline-success link-underline-opacity-25";
    recomenIconoHome.href = "../index.html";
    recomenIconoHome.innerHTML = "HOME";
    recomenFooterEnlaces.appendChild(recomenIconoHome);
    const logoFooterHome = document.createElement('i');
    logoFooterHome.className = "bi bi-flower3";
    recomenIconoHome.appendChild(logoFooterHome);

    const svgHome = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgHome.classList.add('bi');
    svgHome.setAttribute('aria-hidden', 'true');
    recomenIconoHome.appendChild(svgHome);

    const useHome = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useHome.setAttribute('xlink:href', '#arrow-right');
    svgHome.appendChild(useHome);

    const botonVolverForm = document.createElement('button');
    botonVolverForm.setAttribute('type', 'button');
    botonVolverForm.className = "btn btn-outline-success";
    botonVolverForm.id = "recomendacion-icono-form";
    botonVolverForm.innerHTML = "FORMULARIO";
    recomenFooterEnlaces.appendChild(botonVolverForm);
    const logoFooterForm = document.createElement('i');
    logoFooterForm.className = "bi bi-file-text";
    botonVolverForm.appendChild(logoFooterForm);

    const footerCopyri = document.createElement('div');
    footerCopyri.className = "footer-copyright";
    recomenFooter.appendChild(footerCopyri);

    const footerCopyriParra = document.createElement('p');
    footerCopyriParra.innerHTML = "Copyright(c)2023 mi PLANta";
    footerCopyri.appendChild(footerCopyriParra);

}