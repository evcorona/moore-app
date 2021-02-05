let theUser = {}
let endpoint = "http://127.0.0.1:8080/auth/login"

//Listener de Inputs del Formulario
$("input").keyup(event => {
  let property = event.target.name
  let value = event.target.value
  theUser[property] = value
  console.log(theUser)
})

//Listener de Boton Login
$(".btn-login").click(() => {
  /*  theUser = {
  email: "veroxcrown@vxsolutions.com",
  password: "123Jadotville"
}*/
  console.log("Logueando...")
  postAjax(theUser)
})

//Request de POST  
const postAjax = (theEntry) => {
  $.ajax({
    url: endpoint,
    headers: { "Content-Type": "application/json" },
    method: "POST",
    data: JSON.stringify(theEntry),
    dataType: "json",
    success: data => {
      localStorage.setItem("jwt", data.data.token)
      data.data.type === "admin" ? $(location).attr('href', "/admin.html") : $(location).attr('href', "/colaborator.html")
    },
    error: error => {
      console.log(error)
    }
  });
}

//Listener de Href Olvidaste
$(".btn-forget").click(() => {
  console.log("En construcción")
})