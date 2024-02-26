// crear una función que se ejecutara cuando hago click en el boton
function muestra_oculta(id) {
    //declaro la función y paso por parametro el selector de referencia que quiero ocultar/mostrar
    let div = document.getElementById(id);
    // usi el condicional If para saber si el div esta oculto (display : none) o si esta visible
    if (div.style.display=="none") {
        div.style.display = "flex";
    }
    else{
        div.style.display ="none";
    }
    
}