let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");

function enviar(){
    alert("Olá " + nome.value + " com email: " + email.value + " e com assunto: " + assunto.value);
}