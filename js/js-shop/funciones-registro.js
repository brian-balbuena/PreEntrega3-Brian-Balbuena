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
    console.log(usuarioFinal,"array local");
    console.log(user , email, contrasenia)
    // class Newuser {
    //     constructor(info) {
    //         this.mail = info.mail;
    //         this.nombre = info.nombre;
    //         this.password = info.password;
    //     }
    // }

    let infoNew = {
        mail: `${email}`,
        nombre: `${user}`,
        password: `${contrasenia}`,
    }
    let usuarioNew = new Newuser(infoNew);

    // let arrayLocalStorage = localStorage.getItem('usuarios')
    // let miArray = arrayLocalStorage ? JSON.parse(arrayLocalStorage) : [];
    // let miArray = JSON.parse(arrayLocalStorage);
    usuarioFinal.push(usuarioNew);

   console.log(usuarioNew.nombre)
    // grabo los usuarios nuevos en el localStorage
    // localStorage.setItem('ususarios', JSON.stringify(miArray));
    let usuarioCarga = JSON.stringify(usuarioFinal);
    localStorage.setItem('usuarios', usuarioCarga);

    console.log(usuarioFinal,"gravo?");
    // localStorage.setItem('usuarios', miArray);
}