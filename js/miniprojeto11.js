// Criar o objeto endereço que contém
// - rua,
// - cidade,
// - CEP,
// - função exibirEndereço (mostrar propriedades e valores)

let endereco = {
  rua: 'Flores do Jardim',
  cidade: 'Suzano',
  CEP: 08522855
}

function exibirEndereco() {
  for (let key in endereco) {
    console.log(key, endereco[key])
  }
}

exibirEndereco()
