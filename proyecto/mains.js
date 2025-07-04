//Base de Datos
const uñas = [
    { id: 1, nombre: "Manicura Francesa", precio: 20},
    { id: 2, nombre: "Esmaltado Semipermanente", precio: 25},
    { id: 3, nombre: "Esmaltado Permanente", precio: 30},
    { id: 4, nombre: "Decoración de Uñas", precio: 35},
]

// Función para mostrar el menú de uñas
function mostrarMenuUñas() {
    console.log("Menú de Uñas:")
    uñas.forEach(uña => {
        console.log(`${uña.id}. ${uña.nombre} - $${uña.precio}`)
    })
}

// Función para seleccionar un servicio de uñas
function seleccionarServicioUñas() {
    mostrarMenuUñas()
    const idSeleccionado = parseInt(prompt("Seleccione el ID del servicio de uñas:"))
    const servicioSeleccionado = uñas.find(uña => uña.id === idSeleccionado)
    
    if (servicioSeleccionado) {
        console.log(`Has seleccionado: ${servicioSeleccionado.nombre} - $${servicioSeleccionado.precio}`)
        return servicioSeleccionado
    } else {
        console.log("Servicio no encontrado. Por favor, intenta de nuevo.")
        return null
    }
}
// Función para calcular el total de la compra
function calcularTotal(serviciosSeleccionados) {
    let total = 0
    serviciosSeleccionados.forEach(servicio => {
        total += servicio.precio
    })
    return total
}   

