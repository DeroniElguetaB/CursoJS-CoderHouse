
function saludar(){
    alert("Bienvenido a Mangos 3D")
}
function invalido(){
    alert("Valor no valido")
}
function sumarProductos(productoUno, productoDos, productoTres){
    let sumatoria = productoUno + productoDos + productoTres
    return sumatoria
    }

saludar()
let question

while (question != "si" && question != "Si"){
    
    question = prompt("Es usuario de Mangos 3D? si/no")

    if ((question == "si") || (question == "Si")) {
        let usuario = prompt("Ingresar nombre de usuario")
        alert(`Hola ${usuario}! que deseas hacer?`)
        let opcion

        while ((opcion != 1 && opcion != "1.") || (opcion != 2 && opcion != "2.") || (opcion !== "ESC")) {

            opcion = parseInt(prompt("1. Ver catalogo de productos. \n2. Realizar una compra de producto.")) 
    
            if (opcion == 1 || opcion == "1.") {
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
            else {
                invalido()
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