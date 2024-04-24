let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


function validaNome(){

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "black"
    }else {
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "black"
        nomeOk = true
    }

}

function validaEmail(){

    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "black"
    }else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "black"
        emailOk = true
    }

}

function validaAssunto(){

    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "black"
        txtAssunto.style.display = "block"
    }else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}

function enviar(){

    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    }else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}
