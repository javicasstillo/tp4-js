//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const estadoAuto = document.getElementById("estadoAuto")

estadoAuto.textContent = "El auto esta apagado"

const auto = {
    marca: "Ford",
    modelo: "Ecosport",
    color: "Azul",
    estado: false,
    encenderAuto: function(){
        if (this.estado === false){
            this.estado = true
            btnEncender.disabled = true
            btnApagar.disabled = false
            estadoAuto.textContent = `El auto: ${auto.marca} ${auto.modelo} ${auto.color} se encendio.`
        }   
    },
    apagarAuto: function(){
        if (this.estado === true){
            this.estado = false
            btnApagar.disabled = true
            btnEncender.disabled = false
            estadoAuto.textContent = estadoAuto.textContent = `El auto: ${auto.marca} ${auto.modelo} ${auto.color} se apago.`

        }   
    }
}
const btnEncender = document.getElementById("btnEncender")
const btnApagar = document.getElementById("btnApagar")
btnApagar.disabled = true

btnEncender.addEventListener("click", ()=> auto.encenderAuto())
btnApagar.addEventListener("click", ()=> auto.apagarAuto())



