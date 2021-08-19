// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

function somarMultiplos(number) {
  let somar = 0
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somar += i
    }
  }
  return console.log(somar)
}

somarMultiplos(25)
