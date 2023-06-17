function comprobacionMail(array, mail) {
    let verificacionMail = array.find((item) => {
        return item.mail === mail.value;
    });
    if (verificacionMail !== undefined) {
        newMail.style.borderColor = "#FD8A8A";
        newMail.value = "";
        Swal.fire({
            icon: 'error',
            title: 'Mail invalido',
            text: `El mail ${mail.value} ya pertenece a un usuario`,
        });
        return false
    } else {
        // newMail.style.borderColor = "#92BA92";
        newMail.value = newMail.value;
        return true;
    }
}


function comprobacionPassword(password, validacion) {


    if (password.value !== validacion.value) {
        validacionPassword.style.borderColor = "#FD8A8A";
        validacionPassword.value = "";
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'No coinsiden los password',
        });
        return false;
    } else {
        validacionPassword.style.borderColor = "#92BA92";
        validacion.value = validacion.value;
        return true;
    }

}


function crearUsuario(user, email, contrasenia) {
    let usuariosGuardados = localStorage.getItem('usuarios');
    let usuarioFinal = JSON.parse(usuariosGuardados);
    
    let infoNew = {
        mail: `${email}`,
        nombre: `${user}`,
        password: `${contrasenia}`,
        estado: 0,
    }
    let usuarioNew = new Newuser(infoNew);
    usuarioFinal.push(usuarioNew);

    // grabo los usuarios nuevos en el localStorage
    let usuarioCarga = JSON.stringify(usuarioFinal);
    localStorage.setItem('usuarios', usuarioCarga);
    // activo el usuario 
    activarUsuario(usuarioFinal, email);
}

function activarUsuario (array, email) {
    const objetoEncontrado = array.find(buscar => buscar.mail === email);
    objetoEncontrado.estado = 1;
    // cierro el panel de login 
    registro.style.display = "none";
    let usuarioActivo = JSON.stringify(objetoEncontrado);
    sessionStorage.setItem('userarioActivo', usuarioActivo);
     // cambio el icono de login 
     let buttonUser = document.getElementById('button-registro');
     buttonUser.id = ("usuario-activo");
     remover.remove();
     let iconoLogin = document.getElementById('iconUser');
     // Crear los elementos necesrios para cambiar el icono del ususario
     let pathElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
     pathElement1.setAttribute("d", "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z");
     iconoLogin.appendChild(pathElement1);
     let pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
     pathElement2.setAttribute("d", "M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z");
     iconoLogin.appendChild(pathElement2);
}