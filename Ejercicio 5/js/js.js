//5- Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
//mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
//esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
//mostrarDatos: devuelve toda la información del objeto.
//generaDNI(): genera un número aleatorio de 8 cifras.
let dni
let generacion

let nombreParametro = prompt("Ingresa tu nombre")
let edadParametro = parseInt(prompt("Ingresa tu edad"))
let sexoParametro = prompt("Ingresa tu sexo")
let pesoParametro = prompt("Ingresa tu peso")
let alturaParametro = prompt("Ingresa tu altura")
let nacimientoParametro = parseInt(prompt("Ingresa tu año de nacimiento"))

function numeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

class Persona{
    constructor(nombreParametro, edadParametro, sexoParametro, pesoParametro, alturaParametro, nacimientoParametro){
        this.nombre = nombreParametro
        this.edad = edadParametro
        this.sexo = sexoParametro
        this.peso = pesoParametro
        this.altura = alturaParametro
        this.nacimiento = nacimientoParametro
    }
    mostrarGeneracion(){
        if(this.nacimiento >=1930 && this.nacimiento <=1948){
            this.generacion = "Silent Generation"
        } else if(this.nacimiento >=1949 && this.nacimiento <=1968 ){
            this.generacion = "Baby Boom"
        } else if(this.nacimiento >=1969 && this.nacimiento <=1980){
            this.generacion = "Generacion X"
        } else if(this.nacimiento >=1981 && this.nacimiento <=1993){
            this.generacion = "Generacion Y"
        } else if(this.nacimiento >=1994 && this.nacimiento <=2010){
            this.generacion = "Generacion Z"
        } else{
            this.generacion = "Sin Generacion"
        }
        document.writeln(`Esta persona pertenece a la generacion: ${this.generacion}`)
    }
    esMayorDeEdad(){
        if(this.edad <18){
            document.writeln(`<p>Esta persona es menor de edad</p>`)
        } else{
            document.writeln(`<p>Esta persona es mayor de edad</p>`)
        }
    }
    mostrarDatos(){
        document.writeln(`<ul><li>Nombre: ${this.nombre}</li><li>Edad: ${this.edad}</li><li>Sexo: ${this.sexo}</li><li>Peso: ${this.peso}</li><li>Altura: ${this.altura}</li><li>Nacimiento: ${this.nacimiento}</li></ul>`)
    }
    generaDni(){
        this.dni = numeroAleatorio(10000000, 99999999)
        document.writeln(`<p>El dni de la persona es: ${this.dni}</p>`)
    }
}

const persona1 = new Persona(nombreParametro, edadParametro, sexoParametro, pesoParametro, alturaParametro, nacimientoParametro)

persona1.mostrarDatos()
persona1.mostrarGeneracion()
persona1.esMayorDeEdad()
persona1.generaDni()
