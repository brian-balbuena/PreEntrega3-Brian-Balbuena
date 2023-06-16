// creo nuevo usuario 

let usuarios = [];

class Newuser {
    constructor(info) {
        this.mail = info.mail;
        this.nombre = info.nombre;
        this.password = info.password;
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


// // cree un usuario para tener uno de prueba 
let info1 = {
    mail: "brian@brian",
    nombre: "brian",
    password: 4545,
}
let nuevoUsuario = new Newuser(info1);
usuarios.push(nuevoUsuario);
console.log(usuarios);

let usuariosLocal = JSON.stringify(usuarios);
localStorage.setItem('usuarios', usuariosLocal);




function addUser(mail, nombre, password) {
    let newInfo = {
        mail: comprobacionMail(),
        nombre: comprobacionName(),
        password: comprobacionPassword(),
    }

}


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

let singUp = document.getElementById('singUp');
singUp.addEventListener('click', (usuarios) => {
    let usuariosGuardados = localStorage.getItem('usuarios');
    let usuarioFinal = JSON.parse(usuariosGuardados);


    // usuarioFinal.forEach(element => {
    //     console.log(element.mail);
    // });


    if (!comprobacionMail(usuarioFinal, newMail) || newMail === "") {
        console.log("entro en mail")
        comprobacionMail(usuarioFinal, newMail)
    } else if (!comprobacionPassword(newPassword, validacionPassword) || validacionPassword === "") {
        console.log("entro en password")
        comprobacionPassword(newPassword, validacionPassword)
    }

    // no graba en el localStorage
    if (comprobacionMail(usuarioFinal, newMail) && comprobacionPassword(newPassword, validacionPassword)) {
        crearUsuario(newUser.value, newMail.value, newPassword.value);
        // let crearUser = () => {
        //     let usuarioNew = new Newuser(newMail.value,newUser.value, newPassword.value);
            
        //     // let arrayLocalStorage = localStorage.getItem('usuarios')
        //     // let miArray = arrayLocalStorage ? JSON.parse(arrayLocalStorage) : [];
        //     // let miArray = JSON.parse(arrayLocalStorage);
        //     usuarioFinal.push(usuarioNew);
        //     console.log(usuarioFinal,"array local");
        //     alert(usuarios.nombre);
        //     // grabo los usuarios nuevos en el localStorage
        //     // localStorage.setItem('ususarios', JSON.stringify(miArray));
        //     let usuarioCarga = JSON.stringify(usuarioFinal);
        //     localStorage.setItem('usuarios', usuarioCarga);
        // }
    }
});


// validaciones 
let usuario = document.getElementById('user');
let passwordUsuario = document.getElementById('userPassword');

const validacionUsuario = () => {
    if (user !== "") {

    }
};

