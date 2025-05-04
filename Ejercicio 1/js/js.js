//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    marca: "ford",
    modelo: "ecosport",
    color: "azul",
    estado: false,
    encenderAuto: function(){
        if (this.estado === false){
            this.estado = true
            document.writeln(`<p>El auto se encendio</p>`)
        }   
    },
    apagarAuto: function(){
        if (this.estado === true){
            this.estado = false
            document.writeln(`<p>El auto se apago</p>`)
        }   
    }
}

auto.encenderAuto()
auto.apagarAuto()


