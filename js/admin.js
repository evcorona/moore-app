let endpointActivs = "http://127.0.0.1:8080/activities"
let endpointClients = "http://127.0.0.1:8080/clients"
let endpointProjects = "http://127.0.0.1:8080/projects"
let endpointColabs= "http://127.0.0.1:8080/colaborators"

let allInfo = {}
let allDays = {}
let startDay = 00
let today = 00

//LocalStorage
let jwt = localStorage.getItem("jwt") 
if(jwt){
  localStorage.setItem("usr",JSON.parse(atob(jwt.split(".")[1])).username)
  $(".username").text(localStorage.getItem("usr"))
  $(".signout").click( event => {
      localStorage.clear()
      $(location).attr('href', "/index.html") 
  })
} /* //Aplicar cuando exista jwt
else {
  $(location).attr('href', "/index.html") 
}
 */

//ajax get de actividades
//Llenado de cards iniciales
//Llenado de card hoy 

//Listener Buttons Agregar
//Listener Boton Agregar de la Modal
//Listener filtros actividades
//creacion de objeto allDays uniendo los all Info para ordenar por dias
//llenado de tabla
//listener de cada row
//llenado tabla derecha o deslpiegue de card alerta danger
//Listener boton eliminar actividad por row

