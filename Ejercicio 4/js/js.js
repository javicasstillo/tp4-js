//1) Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
//2) Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//3) Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    constructor(codigoParametro, nombreParametro, precioParametro){
        this.codigo = codigoParametro
        this.nombre = nombreParametro
        this.precio = precioParametro
    }
    imprimeDatos(){
        document.writeln(`<ul><li>El valor de la propiedad codigo es: ${this.codigo}</li><li>El valor de la propiedad nombre es: ${this.nombre} </li><li>El valor de la propiedad precio es: ${this.precio}</li></ul>`)
    }
}

const celular = new Producto(123, "iPhone 13", "$480.000" )
const televisor = new Producto(456, "Samsung TV", "$1.100,000")
const computadora = new Producto(789, "Notebook PC", "$500.000")

const productosGuardados = [celular, televisor, computadora]

for(let i = 0; i< productosGuardados.length; i++){
    productosGuardados[i].imprimeDatos()
}