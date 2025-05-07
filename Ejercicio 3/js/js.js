//Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

let perimetro
let area

const altoParametro = parseInt(prompt("Ingresa el alto de un rectangulo"))
const anchoParametro = parseInt(prompt("Ingresa el ancho de un rectangulo"))
const modificacionAlto = parseInt(prompt("Ingresa el alto de un rectangulo a modificar"))
const modificacionAncho = parseInt(prompt("Ingresa el ancho de un rectangulo"))




class creadorRectangulos{
    constructor(altoParametro, anchoParamentro){
        this.alto = altoParametro
        this.ancho = anchoParamentro
    }
    mostrarPropiedades(){
        document.writeln(`<ul><li>Alto del rectangulo: ${this.alto}</li><li>Ancho del rectangulo: ${this.ancho}</li></ul>`)
    }

    calcularPerimetro(){
        perimetro = 2*(this.alto + this.ancho)
        document.writeln(`<p>El perimetro es: ${perimetro}</p>`)
    }

    calcularArea(){
        area = this.ancho * this.alto
        document.writeln(`<p>El area es: ${area}</p>`)
    }

    modificarPropiedades(){
        this.alto = modificacionAlto
        this.ancho = modificacionAncho
        document.writeln(`<ul><li>Alto del rectangulo: ${this.alto}</li><li>Ancho del rectangulo: ${this.ancho}</li></ul>`)
    }
}



const rectangulo1 = new creadorRectangulos(altoParametro, anchoParametro)

rectangulo1.mostrarPropiedades()
rectangulo1.calcularPerimetro()
rectangulo1.calcularArea()
document.writeln("<p>SE MODIFICAN DATOS</p>")
rectangulo1.modificarPropiedades()
rectangulo1.calcularPerimetro()
rectangulo1.calcularArea()

