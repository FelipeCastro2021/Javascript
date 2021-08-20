// Exibit a quantidade de asteriscos correspondente ao número da linha

function adicionarAsterisco(asterisco) {
  let i = 1,
    linhaAsterisco = ''
  while (i <= asterisco) {
    linhaAsterisco += '*'
    console.log(linhaAsterisco)
    i++
  }
}

// function adicionarAsterisco(asterisco) {
//   for (let linha = 1; linha <= asterisco; linha++) {
//     let padrao = ''
//     for (let i = 1; i <= linha; i++) {
//       padrao += '*'
//     }
//     console.log(padrao)
//   }
// }

adicionarAsterisco(15)
