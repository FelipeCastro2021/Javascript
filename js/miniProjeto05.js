// Par ou ímpar
// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar

function ParImpar(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) console.log(i, 'PAR')
    else console.log(i, 'IMPAR')
  }
}

ParImpar(2)
