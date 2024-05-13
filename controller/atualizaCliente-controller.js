import { clienteService } from '../service/cliente-service.js'

const pegaURL = new URL(window.location) //onde está na página

const id = pegaURL.searchParams.get('id') //pega o id na url

const inputNome = document.querySelector('[data-nome]') //percorre o dom
const inputEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
.then( dados => { 
  inputNome.value = dados.nome
  inputEmail.value = dados.email
})

const formulario = document.querySelector('[data-form]') //data atributes

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()

  clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
  window.location.href = "../telas/edicao_concluida.html"
})