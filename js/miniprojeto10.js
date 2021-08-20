// Fazer a exibição dos números primos que serão inseridos dentro de uma função

function exibirPrimo(num) {
  for (let i = 2; i <= num; i++) {
    if (calcularPrimo(i)) console.log(i)
  }
}

function calcularPrimo(valor) {
  for (let divisor = 2; divisor < valor; divisor++) {
    if (valor % divisor === 0) return false
  }
  return true
}

exibirPrimo(200)
