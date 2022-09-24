// Pagína Ativa
const links = document.querySelectorAll('.header-menu a')
function linksAtivo(link){
  const url = location.href
  const href = link.href
  if (url.includes(href)){
    link.classList.add('ativo')
  }
}
links.forEach(linksAtivo)

// Ativar Itens do Orçamento
const parametros = new URLSearchParams(location.search)
function ativarProduto(parametro){
  const elemento = document.getElementById(parametro)
  if(elemento){
    elemento.checked = true
  }
}
parametros.forEach(ativarProduto)

// Perguntas Frequentes

const perguntas = document.querySelectorAll('.lista-perguntas button')

function eventoExpandir(evento){
  const pergunta = evento.currentTarget
  const controle = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controle)
  
  resposta.classList.toggle('ativo')
  const ativo = resposta.classList.contains('ativo')
  pergunta.setAttribute('aria-expanded', ativo)
}

function eventoPerguntas(pergunta){
  pergunta.addEventListener('click', eventoExpandir)
}
perguntas.forEach(eventoPerguntas)

// Galeria de Bicicletas

const galeria = document.querySelectorAll('.bicicletas-imgs img')
const galeriaContainer = document.querySelector('.bicicletas-imgs')

function trocaImagem(evento){
  const troca = evento.currentTarget
  const media = matchMedia('(min-width: 936px)').matches
  if (media){
    galeriaContainer.prepend(troca)
  }
}

function eventosGaleria(eventoImg){
  eventoImg.addEventListener('click', trocaImagem)
}

galeria.forEach(eventosGaleria)


// Formulario

const formulario = document.querySelector('form')

function formularioEnviado(respostaForm){
  if(respostaForm.ok){
    window.alert('Mensagem enviada, em breve entraremos em contato. Geralmente respondemos em menos de 24h.')
  } else{
    window.alert('Erro no envio, você pode tentar entrar em contato diretamente pelo nosso email: contato@move&life.com')
  }
}

function enviarFormulario(event){
  event.preventDefault()
  const botao = document.querySelector('form button')
  botao.disabled = true
  botao.innerHTML = 'Enviando...'

  const data= new FormData(formulario)
  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado)
}

formulario.addEventListener('submit', enviarFormulario)
