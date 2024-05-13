import { clienteService } from '../service/cliente-service.js' 
//lembrar de importar aqui e também colocar no html correspondente

const formulario = document.querySelector('[data-form]') 
// percorre o DOM


formulario.addEventListener('submit', async (evento) => {
// espera o evento
      evento.preventDefault()
      //previne o formulário ser enviado antes de preenchido
      try {
          const nome = evento.target.querySelector('[data-nome]').value
          const email = evento.target.querySelector('[data-email]').value
  
      await clienteService.criaCliente(nome, email)
      //quando concluido vai pra essa pagina
          window.location.href = '../telas/cadastro_concluido.html'
      }catch (erro) {
          console.log(erro)
          window.location.href = "../telas/erro.html"
      }
})