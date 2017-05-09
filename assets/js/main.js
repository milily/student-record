function printAll(){
    var miDiv = document.getElementById("mostrar-pantalla");
    miDiv.innerHTML = "";
    estudiantes.forEach(function(value){
    miDiv.innerHTML += "<br>" + "Nombre: " + value.nombre + "<br>" + "Porcentaje Técnico: " + value.porcentajeTecnico + "%" + "<br>" + "Porcentaje HSE: " + value.porcentajeHSCStudent + "%" + "<br>";
    }); 
}