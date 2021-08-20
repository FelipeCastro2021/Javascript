// Exercício nota escolar
// Obter a média a partir de um array
// 0 - 59 = F
// 60-69 = E
// 70-79 = C
// 80-89 = D
// 90-100 = A

const array = [60, 60, 60]

function mediaAluno(notas) {
  const media = somarMedia(notas)

  if (media < 60) return 'F'
  if (media < 70) return 'D'
  if (media < 80) return 'C'
  if (media < 90) return 'B'
  return 'A'
}

function somarMedia(array) {
  let soma = 0
  for (let valor of array) {
    soma += valor
  }
  return soma / array.length
}

console.log(mediaAluno(array))

/* 02:15:33 */
