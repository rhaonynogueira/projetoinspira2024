function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const camposDoFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // const listaRespostas = {
    //     "nome": e.target.elements["nome"].value, 
    //     "email": e.target.elements["email"].value,
    //     "assunto": e.target.elements["assunto"].value,
    //     "inputMensagem": e.target.elements["inputMensagem"].value,
    // }
})
camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'tooLong',
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
        tooLong: "O nome deve conter no máximo 50 caracteres!"
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido."
    },
    assunto: {
        valueMissing: "O campo assunto não pode estar vazio.",
        tooShort: "O campo do assunto não tem caractéres suficientes.",
    },
    inputMensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio',
        tooShort: "O campo de CPF não tem caractéres suficientes.",
    },
}

function verificaCampo(campo) {
    let mensagem = "";

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}

function verificarTamanho() {
    const campo = document.getElementById("nome");
    const valor = campo.value;

    if (valor.length >= 50) {
        alert("O nome deve conter no máximo 50 caracteres!");
    }
}

function verificarTamanhoAssunto() {
    const campo = document.getElementById("assunto");
    const valor = campo.value;

    if (valor.length >= 50) {
        alert("O assunto deve conter no máximo 50 caracteres!");
    }
}

function verificarTamanhoMensagem() {
    const campo = document.getElementById("inputMensagem");
    const valor = campo.value;

    if (valor.length >= 300) {
        alert("A mensagem deve conter no máximo 300 caracteres!");
    }
}

function habilitarBotao() {
    document.getElementById("enviar").disabled = true
    document.querySelectorAll(".campo__escrita").addEventListener("input", function(event){

      var conteudo = document.querySelectorAll(".campo__escrita").value;
  
      if (conteudo !== null && conteudo !== '') {
   
        document.getElementById("enviar").disabled = false;
      } else {
        document.getElementById("enviar").disabled = true;
      }
  });

}

function toggleButton() {
    const nomeValidacao = document.querySelector('#nome').value;
    const emailValidacao = document.querySelector('#email').value;
    const assuntoValidacao = document.querySelector('#assunto').value;
    const mensgamValidacao = document.querySelector('#inputMensagem').value;

    if (nomeValidacao && emailValidacao && assuntoValidacao && mensgamValidacao) {
        document.querySelector('#enviar').disabled = false
        return
    }
    document.querySelector('#enviar').disabled = true
}

function enviarFormulario(){
    let valores = []
    camposDoFormulario.forEach((campo)=>{
        valores.push(campo.value)
        campo.value = ""
    })
    let mensagem = `Nome: ${valores[0]}, E-Mail: ${valores[1]}, Assunto: ${valores[2]}, Mensagem: ${valores[3]}`
       alert("Formulário enviado com sucesso!")
}
