// Cálculo de um número sendo fatorial

function calcularFatorial(num) {
  let soma = 1
  for (let i = num; i > 0; i--) {
    soma *= i
  }
  return soma
}

console.log(calcularFatorial(8))
