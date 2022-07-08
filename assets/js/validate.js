// Seu JavaScript de validação aqui:
/* Novo JavaScript para validação do formulario seguindo vídeo do YouTube */
const form = document.getElementById('form');
const nome = document.getElementById('username');
const email = document.getElementById('email');
const assunto = document.getElementById('subject');
const mensagem = document.getElementById('posts');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validaCampos();
})

function validaCampos() { 
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const assuntoValor = assunto.value.trim();
    const mensagemValor = mensagem.value.trim();
    
    if(nomeValor === '') {        
        mostrarErro(nome, "Preencha esse campo com seu Nome Completo.");
        nome.focus();
    } else if(nomeValor.length > 50) { 
        mostrarErro(nome, "Seu Nome Completo deve ter até 50 caracteres.");
        nome.focus();
    }else {        
        mostrarSucesso(nome);
        email.focus();
    }

    if(emailValor === '') {        
        mostrarErro(email, "Preencha esse campo com o seu E-mail.");       
    } else if (!validaEmail(emailValor)) {
        mostrarErro(email, "E-mail inválido!");       
    } else {        
        mostrarSucesso(email);
        assunto.focus();
    }

    // Nova condição para atender solicitação no site do Trello. 
    if(assuntoValor === '') {        
        mostrarErro(assunto, "Preencha esse campo com o Assunto.");        
    } else if(assuntoValor.length > 50) { 
        mostrarErro(assunto, "O assunto deve ter até 50 caracteres.");        
    }else {        
        mostrarSucesso(assunto);
        mensagem.focus();
    }

    // Nova condição para atender solicitação no site do Trello.
    if(mensagemValor === '') {       
        mostrarErro(mensagem, "Preencha esse campo com a sua Mensagem.");        
    } else if(mensagemValor.length > 300) { 
        mostrarErro(mensagem, "A Mensagem deve ter até 300 caracteres.");        
    }else {       
        mostrarSucesso(mensagem);
    } 
}

function mostrarErro(input, message) {
    const formularioControle = input.parentElement;
    const small = formularioControle.querySelector('small');
    small.innerText = message;
    formularioControle.className = 'form-control error';
}

function mostrarSucesso(input) {
    const formularioControle = input.parentElement;
    formularioControle.className = 'form-control success';
}

function validaEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}
