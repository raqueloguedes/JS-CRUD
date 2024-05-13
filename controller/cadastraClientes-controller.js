import { clienteService } from '../service/cliente-service.js' //lembrar de impor aqui e também colocar no html correspondente

const formulario = document.querySelector('[data-form]') // percorre o DOM


formulario.addEventListener('submit', (evento)=> { // espera o evento
  evento.preventDefault() //previne o formulário ser enviado antes de preenchido
  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value

  clienteService.criaCliente(nome, email)
  .then(()=> {
    //quando concluido vai pra essa pagina
    window.location.href = '../telas/cadastro_concluido.html'
  })
})