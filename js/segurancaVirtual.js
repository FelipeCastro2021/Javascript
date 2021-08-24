function verificarEntrada() {
  nomeConvidado = document.getElementById('nome').value //Está pegando o valor do input do nome
  convidadosRenan = [
    'Fernando Soares',
    'Pedro Henrique Pereira',
    'Felipe Castro',
    'Ryan Castro',
    'Juan Pablo'
  ]
  if (convidadosRenan.includes(nomeConvidado)) {
    console.log(
      (document.getElementById('permissaoEntrada').innerText = 'Pode entrar')
    )
  } else {
    console.log(
      (document.getElementById('permissaoEntrada').innerText =
        'Não pode entrar')
    )
  }
}
