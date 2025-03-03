//consumindo el API para acceder a los datos de la base de datos

let url="localhost:8080/storeapi/v1/producto"

let peticion={
    method:"GET",
    Headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer renderizar
    let fila=document.getElementById("fila")
    respuesta.forEach(function(producto){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.src=producto.foto

        let nombreProducto=document.createElement("h3")
        nombreProducto.classList.add("text-center")
        nombreProducto.textContent=producto.nombre

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombreProducto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})