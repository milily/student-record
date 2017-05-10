//Desarrollo del botón que debe imprimir en pantalla todas las estudiantes ingresadas con el botón AddStudent()

function printAll(){
    var miDiv = document.getElementById("mostrar-pantalla");
    miDiv.innerHTML = "";
    estudiantes.forEach(function(value){
    miDiv.innerHTML += "<br>" + "Nombre: " + value.nombre + "<br>" + "Porcentaje Técnico: " + value.porcentajeTecnico + "%" + "<br>" + "Porcentaje HSE: " + value.porcentajeHSC + "%" + "<br>";
    }); 
}

