//FUNCIONES GLOBALES -------------------------------------------------------------
function saludar(){
    alert("Bienvenido a Mangos 3D")
}
function invalido(){
    alert("Valor no valido")
}
function productoIngresados (){
                
    let productoNuevo1 = new Producto("Soporte patente moto 150cc", 800, 5)
    productos.push(productoNuevo1)
    let productoNuevo2 = new Producto("Carcasa Iphone 12", 1700, 12)
    productos.push(productoNuevo2)
    let productoNuevo3 = new Producto("Porta-lampara ironman", 1500, 1)
    productos.push(productoNuevo3)
    
    return productos
}
function mostrarProductos (productos){

    for(const producto of productos){
        console.log(producto)
        console.log(producto.nombre)
    }
}
function productosDisponibles(){
    let productosEnStock = productoIngresados ()
    mostrarProductos(productosEnStock)
}
//VARIABLES GLOBALES -------------------------------------------------------------
saludar()

let question

// OBJETO -------------------------------------------------------------------------
let productos = [] 

//CLASS OBJETO CONSTRUCTORA--------------------------------------------------------
class Producto {
    constructor (nombre, precioVenta, cantidad){
        this.nombre = nombre.toUpperCase()
        this.precioVenta = precioVenta
        this.cantidad = cantidad
    }
}

// MAQUETADO DE CODIGO ------------------------------------------------------------
while (question != "si" && question != "Si"){
    question = prompt("Es usuario de Mangos 3D? si/no")

    if ((question == "si") || (question == "Si")) {
        let usuario = prompt("Ingresar nombre de usuario")

        if(usuario == "dero" || usuario == "Dero"){
            
            alert(`Hola ${usuario}! que deseas hacer?`)
            opcionesAdmin = parseInt(prompt("1. Agregar productos \n2. Ver catalogo de productos"))

            if (opcionesAdmin == 1){
                
                function agregarProductos (){
                    let numeroProductos = parseInt(prompt("Ingresar cantidad de productos"))
                
                    for (let index = 0; index < numeroProductos; index++) {
                        let nombre = prompt("Ingrese nombre de Producto")
                        let precioVenta = parseFloat(prompt("Ingresar precio de venta"))
                        let cantidad = parseInt(prompt("Ingresar cantidad de stock"))
                
                        let productoARegistrar = new Producto(nombre, precioVenta, cantidad)
                        productos.push(productoARegistrar)
                    }
                    return productos
                }
                function main(){
                    let productoRegistrado = agregarProductos ()
                    mostrarProductos(productoRegistrado)
                }
                main()
            }

            else if(opcionesAdmin == 2){
                productosDisponibles()
            } 
            else{
                invalido()
            }
        }

        else {
            alert(`Hola ${usuario}! que deseas hacer?`)
            let opcion

            while ((opcion !== 1 && opcion !== "1.") || (opcion !== 2 && opcion !== "2.") || (opcion !== "ESC")){
            //for(opcion = 0, opcion == 1, opcion++)

                opcion = parseInt(prompt("1. Ver catalogo de productos. \n2. Realizar una compra de producto. \n3. Ingresar ESC para volver al menu anterior.")) 
        
                if (opcion == 1 || opcion == "1.") {
                    productosDisponibles()
                    alert("- Mates 3D personalizados - ($500) \n- Carcasas iphone/android - ($700) \n- Tapas maquinas Barber&Style = ($600) \n- Fundas Termo design. ($800) \n- Realiza un diseño unico y personalizado!  ")
                }

                else if (opcion == 2 || opcion == "2.") {

                    let seleccionusuario = parseInt(prompt("(1) - Comprar Mate 3D - ($500) \n(2) - Comprar carcasa iphone/android - ($700) \n(3) - Comprar tapa maquina Barber&Style = ($600) \n(4) - Comprar funda Termo design. ($800) \n \nSeleccione su producto con su numero correspondiente"))

                    switch(seleccionusuario){
                        case 1:
                            let opcion1 = (prompt("Añadio Mate 3D - ($500) al carrito de compra \nDesea algo mas?"))
                            alert("Muchas gracias por comprar con Mangos 3D!")
                            break
                        case 2:
                            let opcion2 = (prompt("Añadio carcasa iphone/android - ($700) al carrito de compra \nDesea algo mas?"))
                            alert("Muchas gracias por comprar con Mangos 3D!")
                            break
                        case 3:
                            let opcion3 = (prompt("Añadio tapa maquina Barber&Style = ($600) al carrito de compra \nDesea algo mas?"))
                            alert("Muchas gracias por comprar con Mangos 3D!")
                            break
                        case 4:
                            let opcion4 = (prompt("Añadio funda Termo design. ($800) al carrito de compra \nDesea algo mas?"))
                            alert("Muchas gracias por comprar con Mangos 3D!")
                            break
                        default:
                            invalido()
                                break
                    }
                }

                else if (opcion == "ESC") {
                    alert("Gracias, esperemos que vuelva pronto!")
                }

                else {
                    invalido()
                }
            }
        }
    }

    else if ((question == "no") || (question == "No")) {
        alert("Es necesario crear un usuario.")
    }

    else {
        invalido()
    }
}