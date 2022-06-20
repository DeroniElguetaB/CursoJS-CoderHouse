
function saludar(){
    alert("Bienvenido a Mangos 3D")
}

saludar()
let Question = prompt("Es usuario de Mangos 3D? si/no")

if ((Question == "si") || (Question == "Si")) {
    let Usuario = prompt("Ingresar nombre de usuario")
    alert(`Hola ${Usuario}!`)
}

else if ((Question == "no") || (Question == "No")) {
    alert("Es necesario crear un usuario.")
}

else {
    alert("Valor no valido")
}