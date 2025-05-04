//2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
//Una propiedad titular con el valor "Alex".
//Una propiedad saldo, teniendo como valor inicial 0.
//Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//Un método extraer() que permita retirar la cantidad pasada como parámetro.
//Un método informar() que retorne la información del estado de la cuenta. 

//Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta{
    constructor(titularParametro, saldoParametro){
        this.titular = titularParametro
        this.saldo = saldoParametro
    }

    ingresar(cantidadIngresar){
        document.writeln(`<p>Se ingresaron: $${cantidadIngresar} pesos</p>`)
        this.saldo = this.saldo + cantidadIngresar
    }
    extraer(cantidadExtraer){
        if (this.saldo >= cantidadExtraer ){
            this.saldo = this.saldo - cantidadExtraer
            document.writeln(`<p>Se extrajeron: $${cantidadExtraer} pesos</p>`)
        } else {
            document.writeln(`<p>No tienes suficiente saldo para extraer $${cantidadExtraer} pesos</p>`)
        }
    }
    informar(){
        document.writeln(`<p>Tu saldo actual es: $${this.saldo} pesos</p>`)
    }
}

const alex = new Cuenta("Alex", 0)

//Mensajes en pantalla 

document.writeln(`<p> Titular: ${alex.titular}</p>`)
document.writeln(`<p> Saldo: ${alex.saldo}</p>`)

alex.informar()
alex.ingresar(10000)
alex.extraer(20000)
alex.extraer(6000)
alex.informar()



