// creo nuevo usuario 

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

class Newuser {
    constructor(info) {
        this.mail = info.mail;
        this.nombre = info.nombre;
        this.password = info.password;
        this.estado = info.estado;
    }
}

// visuales
let giro = document.getElementById('vuelta');
let reversa = document.getElementById('reve');
let frente = document.getElementById('fren');
let vuelta = document.getElementById('giro');

giro.addEventListener('click', () => {

    if (frente.style.transform == "rotateY(180deg)") {
        reversa.style.transform = "rotateY(0deg)";
    } else {
        frente.style.transform = "rotateY(-180deg)";
        reversa.style.transform = "rotateY(0deg)";
    }

})
vuelta.addEventListener('click', () => {

    if (reversa.style.transform == "rotateY(180deg)") {
        reversa.style.transform = "rotateY(0deg)";

    } else {
        reversa.style.transform = "rotateY(180deg)";
        frente.style.transform = "rotateY(0deg)";
    }

})

// agregar nuevo usuario 
// capturo los input 
let newUser = document.getElementById('newUser');
let newMail = document.getElementById('newMail');
let newPassword = document.getElementById('newPassword');
let validacionPassword = document.getElementById('verificacionPassword');
let loginUser = document.getElementById('user');

// grabo los datos ingresados en el form de recomendacion 
if (newUser.value === "") {
    newUser.value = `${nombreUser}`;
}
if (newMail.value === "" || loginUser.value === "") {
    newMail.value = `${mailUser}`;
    loginUser.value = `${mailUser}`;
}

// accion boton para grabar el nuevo usuario 
let singUp = document.getElementById('singUp');
singUp.addEventListener('click', (usuarios) => {
    // llamo al localStorage donde por el momento estan guradaos los datos de los usuarios ya logueados
    let usuariosGuardados = localStorage.getItem('usuarios');
    let usuarioFinal = JSON.parse(usuariosGuardados);

    // utilizo la funciones para validar los campos 
    let mailComprovacion = comprobacionMail(usuarioFinal, newMail);
    let passwordComprovacion = comprobacionPassword(newPassword, validacionPassword);

    // si todo esta correcto graba 
    if ((mailComprovacion) && (passwordComprovacion) && newMail.value != "") {
        crearUsuario(newUser.value, newMail.value, newPassword.value);
        let timerInterval
        Swal.fire({
            icon: 'success',
            title: `Bienvenido ${newUser.value}`,
            timer: 1500,
            confirmButtonColor: '#92BA92'
        })
    } else {
        if (newMail.value == "") {
            Swal.fire({
                icon: 'error',
                title: 'Mail invalido',
                text: `Ingresar un mail para crear un usuario`,
            });
        }
    }
});

// accion iniciar sesion 
let inputUser = document.getElementById('user');
let inputMail = document.getElementById('userPassword');


let login = document.getElementById('login');
login.addEventListener('click', () => {
    let usuariosGuardados = localStorage.getItem('usuarios');
    let dataUsuarios = JSON.parse(usuariosGuardados);

    let busqueda = dataUsuarios.filter((usuario) => {
        return usuario.mail == inputUser.value
    })

    if (busqueda.length) {
        if (busqueda[0].password === inputMail.value) {
            activarUsuario(dataUsuarios, inputUser.value);
            Swal.fire({
                icon: 'success',
                title: `Bienvenido ${busqueda[0].nombre}`,
                timer: 1500,
                confirmButtonColor: '#92BA92'
            })


        } else {
            Swal.fire({
                icon: 'error',
                text: 'El mail o contraseña son incorrectos',
                confirmButtonColor: '#198754',
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            text: 'El mail o contraseña son incorrectos',
            confirmButtonColor: '#198754',
        })
    }
})
// validaciones 
let usuario = document.getElementById('user');
let passwordUsuario = document.getElementById('userPassword');
