let giro = document.getElementById('vuelta');
let reversa = document.getElementById('reve');
let frente = document.getElementById('fren');
let vuelta = document.getElementById('giro');

giro.addEventListener('click', () => {
   
    if (frente.style.transform == "rotateY(180deg)") {
        reversa.style.transform = "rotateY(0deg)";
    }else {
        frente.style.transform = "rotateY(-180deg)";
        reversa.style.transform = "rotateY(0deg)";
    }

})



vuelta.addEventListener('click' , () => {
    
    if ( reversa.style.transform == "rotateY(180deg)") {
        reversa.style.transform = "rotateY(0deg)";
        
    }else {
        reversa.style.transform = "rotateY(180deg)";
        frente.style.transform = "rotateY(0deg)";
    }
   
})