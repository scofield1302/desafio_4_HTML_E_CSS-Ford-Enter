document.getElementById("Input_Name").focus();

function Enviar(event) {
    event.preventDefault(); // <-- Isso evita que a página recarregue

    // Criando a classe contato
    class Contato {
        constructor(nome, telefone, email, mensagem) {
            this.nome = nome;
            this.telefone = telefone;
            this.email = email;
            this.mensagem = mensagem;
        }
    }

    // Pegando os dados dos inputs
    const nome = document.getElementById("Input_Name").value.trim();
    const telefone = document.getElementById("Input_Telefone").value.trim();
    const email = document.getElementById("Input_Email").value.trim();
    const mensagem = document.getElementById("mensagem_contact").value.trim();

    // Validações básicas
    if (!nome) {
        alert("Por favor, informe o seu nome!");
        return document.getElementById("Input_Name").focus();
    }

    if (!telefone) {
        alert("Por favor, informe o seu telefone!");
        return document.getElementById("Input_Telefone").focus();
    }

    if (!email) {
        alert("Por favor, informe o seu E-mail!");
        return document.getElementById("Input_Email").focus();
    }

    if (!email.includes("@") || !email.includes(".") || email.includes(" ")) {
        alert("Por favor, informe um e-mail válido!");
        return document.getElementById("Input_Email").focus();
    }

    if (!mensagem) {
        alert("Por favor, digite a sua mensagem!");
        return document.getElementById("mensagem_contact").focus();
    }

    // Criando objeto com os dados do contato
    const data = new Contato(nome, telefone, email, mensagem);

    // Mostrando mensagem de sucesso
    document.getElementById("popup-contact").style.display = "flex";
    document.getElementById("msg_obrigado").innerHTML = `
        Obrigado sr(a) ${data.nome}! Os seus dados foram encaminhados com sucesso.<br><br>
        Responderemos a você no e-mail: ${data.email} ou pelo telefone ${data.telefone}.
    `;
}

// Função para resetar o formulário
function resetForm() {
    document.getElementById("form-contact").reset();
}

// Função para fechar o popup e limpar o formulário
function closePopup() {
    document.getElementById("popup-contact").style.display = "none";
    resetForm();
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contact");
    form.addEventListener("submit", Enviar);
});

 const bttn_send = document.getElementById("bttn_send_message");
const span1 = document.getElementById("spanCheckbox1");
const span2 = document.getElementById("spanCheckbox2");
const checkbox1 = document.getElementById("inputCheckboxAccept");
const checkbox2 = document.getElementById("inputCheckboxNewsLetter");


span1.addEventListener("click",function(){
    if(checkbox1.checked){
        checkbox1.checked = false;
        bttn_send.disabled = true;
    } else {checkbox1.checked = true; bttn_send.disabled = false}
});

checkbox1.addEventListener("change",function(){
    if(checkbox1.checked){
        bttn_send.disabled = false;
    } else {bttn_send.disabled = true}
});

span2.addEventListener("click",function(){
    if(checkbox2.checked){
        checkbox2.checked = false;
    } else {checkbox2.checked = true}
});