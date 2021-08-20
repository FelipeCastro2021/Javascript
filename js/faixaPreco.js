// Crie um array de objetos de faixa de preços
// Depois será criada uma função para instanciar
// - faixaPreco
// - tooltip
// - mínimo
// - máximo

let faixaPreco = [
  {
    tooltip: 'Até R$ 800,00',
    minimo: 500,
    maximo: 800
  },
  {
    tooltip: 'De R$ 700,00 até R$ 1000,00',
    minimo: 700,
    maximo: 1000
  },
  {
    tooltip: 'De R$ 1000,00 ou mais',
    minimo: 1000,
    maximo: 999999 //valor que não será passado
  }
]

console.log(faixaPreco)

/* Também pode ser feito usando uma factory function */
function criarFaixaProduto(tooltip, minimo, maximo) {
  return {
    tooltip,
    minimo,
    maximo
  }
}

let faixas2 = [
  criarFaixaProduto('Até R$ 700,00', 500, 700),
  criarFaixaProduto('De R$ 700,00 até R$ 1000,00', 700, 1000)
]

console.log(faixas2)

/* Também podendo fazer com construction function */
function FaixaPreco(tooltip, minimo, maximo) {
  ;(this.tooltip = tooltip), (this.minimo = minimo), (this.maximo = maximo)
}

let faixas3 = [new FaixaPreco('Até R$ 700,00', 500, 700)]
console.log(faixas3)
