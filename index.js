
function saludar(){
    alert("Bienvenido a Mangos 3D")
}

saludar()
let question

while (question != "si" && question != "Si"){
    
    question = prompt("Es usuario de Mangos 3D? si/no")

    if ((question == "si") || (question == "Si")) {
        let Usuario = prompt("Ingresar nombre de usuario")
        alert(`Hola ${Usuario}!`)
    }

    else if ((question == "no") || (question == "No")) {
        alert("Es necesario crear un usuario.")
    }

    else {
        alert("Valor no valido")
    }
}