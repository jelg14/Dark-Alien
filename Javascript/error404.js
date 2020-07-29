var url = "http://www.aaasdf.com"

function error404() {
    var nombreUsuario, passwordUser
    nombreUsuario = document.getElementById("usuario").value;
    passwordUser = document.getElementById("password").value;
    if (nombreUsuario === "" || passwordUser === "") {
        alert("Los Campos estan Vacios");
        document.open();
        document.write(
            "<body style='background-color: red'>"+
            "<h1 style='font-size: 200px; text-align:center ; margin-bottom:-5px;'>4<img src='../Images/logo.png' alt='icono'>4</h1> <hr> <h3 style='text-align:center; font-size: 65px; margin-top:1px; '>Pagina no Encontrada</h3>"
            +" <h4 style='font-size: 50px; text-align:center ;'>La pagina que solicita no ha sido encontrada <br> </h4>"+
            "</body> "
            )
        document.close()

    }
}