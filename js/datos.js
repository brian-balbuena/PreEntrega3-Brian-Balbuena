let  basePlantas= [];
const baseDatos = async () => {
    try {
        const response = await fetch ('../js/data.json');
        const arreglos = await response.json();
        basePlantas = arreglos //se setea como variable global
    } catch {
        return alert("error al cargar base de datos");
    }
}
baseDatos();

basePlantas.forEach(element => {
    console.log(element.nombre)
});