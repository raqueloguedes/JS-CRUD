import { clienteService } from '../service/cliente-service.js'
//lista de clientes
const criaNovaLinha = (nome, email, id) =>  { 
  const linhaNovoCliente = document.createElement('tr')
  //copiado do html
  const conteudo = `
      <td class="td" data-td>${nome}</td>
                  <td>${email}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoCliente.innerHTML = conteudo
  linhaNovoCliente.dataset.id = id
  
  return linhaNovoCliente
}


const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento)=> {
    //o alvo do target é o clicar pra excluir
    let ehBotaoDeDeleta = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeDeleta){
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then(()=>{
            linhaCliente.remove() //executa imediatamente
        })
    }
})

clienteService.listaClientes()
.then(data => {
        data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id))
})})