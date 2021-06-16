//inputs
let libro = document.querySelector("#libro")
let autor = document.querySelector("#autor")
let direccion = document.querySelector("#direccion")
//divs
let cargarBtn = document.querySelector("#cargar")
let refrescarBtn = document.querySelector("#refrescar")
let ul = document.querySelector(".lista")
let confirmaciones = document.querySelector(".confirmaciones")
let nroGestion = document.querySelector("#nroGestion")


function nroRandom(){
    return Math.floor(Math.random() * 100000)
}

nroGestion = nroRandom()

class Pedido{
    constructor(libro, autor, direccion){
        this.cargarItems(libro, autor, direccion);
    }
    cargarItems(libro, autor, direccion){

        if(libro && autor && direccion){
            let li = document.createElement("li")
            li.textContent = `Nro. de gestión ${nroGestion} - El libro titulado ${libro}, del autor ${autor} será llevado a la dirección ${direccion}`
            ul.appendChild(li)
        }else{
            alert("Por favor complete todos los datos para continuar")
        }
    }
}

cargarBtn.addEventListener("click", function(){

    if(document.querySelectorAll("li").length >= 5){
        alert("Pulse el boton REFRESCAR para seguir añadiendo pedidos")
        return null;
    } 

    new Pedido(libro.value, autor.value, direccion.value)

    libro.value = "";
    autor.value = "";
    direccion.value = "";
})


refrescarBtn.addEventListener("click", function(){
    let li = document.querySelectorAll("li")
    for(var i = 0 ; i< li.length ; i++){
        li[i].remove()
    }
})

