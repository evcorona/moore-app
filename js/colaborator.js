let endpointActivs = "http://127.0.0.1:8080/activities"

let allInfo = {}

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