// Função que leia as propriedades de um objeto e exibir somente as propriedades do tipo string do objeto

let cachorro = {
  nome: 'Tobby',
  idade: 15,
  altura: 65,
  historia: 'Os 101 Dalmatas',
  content: 'Será que está aparecendo para todos essa string'
}

function lerPropriedades() {
  for (let keys in cachorro) {
    if (typeof cachorro[keys] === 'string') console.log(keys, cachorro[keys])
  }
}

lerPropriedades()
