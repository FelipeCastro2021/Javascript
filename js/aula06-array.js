/* <=================== Exibição de mensagem ===================> */
/* Variável serve para receber um valor e que pode ser reutilizado */
// console.log("Hello World!");
// let id = 5;
// console.log(id);

/* <=================== Valores constantes ===================> */
/* Constantes */
// const valor = 20
// console.log(valor)

// valor = 30; Esse valor não pode ser adicionado, pois o valor é uma constante

/* <=================== Objetos ===================> */
// let nome = "Felipe";
// let idade = 18;
// let sobrenome = undefined;
// let estaAprovado = true;

// let pessoa = {
//     nome:'Felipe',
//     idade:18,
//     sobrenome:undefined,
//     estaAprovado:false
// };

// console.log(pessoa);

/* <=================== Array ===================> */
// let colega = ['Renan', 18, 'Itaquaquecetuba']

// console.log('O comprimento do array é: ' + colega.length)
// console.log(
//   `Nome do colega: ` +
//     colega[0] +
//     ' . Idade do colega: ' +
//     colega[1] +
//     ' e cidade onde mora o colega: ' +
//     colega[2]
// )
// console.log(colega)

/* <=================== Function ===================> */
// var tamanhoFonte = 16
// function alterarTamanhoFonte(tamanho, espacamentoLetras) {
//   tamanhoFonte = `Tamanho da fonte: ${tamanho}. Espaçamento entre as fontes: ${espacamentoLetras}`
// }

// console.log(tamanhoFonte)
// alterarTamanhoFonte(22, 16)
// console.log(tamanhoFonte)

/* <=================== Types functions ===================> */
// function calcularSemRetorno() {
//   console.log('Função limitada que não retorna valores')
// }

// calcularSemRetorno()

// function calcularTabuada(fator1, fator2) {
//   return fator1 * fator2
// }

// let num1 = 5,
//   num2 = 6
// console.log(calcularTabuada(num1, num2))

/* <=================== Operadores Aritméticos ===================> */
// let num = 10

// console.log(num + num)
// console.log(num - num)
// console.log(num * num)
// console.log(num / num)
// console.log(5 ** 2)

// console.log(num++)
// console.log(num)

// console.log(--num)

/* <=================== Operadores de atribuição ===================> */
// let valorCasa = 1200,
//   num1 = 3

// console.log((valorCasa /= valorCasa))
// console.log((num1 **= num1))

/* <=================== Operadores de igualdade ===================> */
// console.log('1' == 1)
// console.log('1' === 1)
// console.log(1 === 1)

/* <=================== Operador Ternário ===================> */
// let media = 6
// let notaFinal = 5

// console.log(notaFinal > media ? 'Aprovado' : 'Reprovado')

/* <=================== Operadores lógicos ===================> */
// let notaFinal = 5,
//   media = 7.2,
//   freqAluno = 80,
//   frequenciaMinima = 75

// frequenciaMinima /= 100
// freqAluno /= 100

// let passou = frequenciaMinima < freqAluno && notaFinal > media

// console.log('Passou de ano: ' + passou)
// // console.log(frequenciaMinima < freqAluno || notaFinal > media)

// let repetiu = !passou
// console.log('Repetiu de ano: ' + repetiu)

/* <=================== Comparação não booleana ===================> */
// let corPrincipal = 'Red'
// let corSecundaria = 'White'
// let escolha = corSecundaria || corPrincipal

// console.log(escolha)

/* <=================== If Else ===================> */
// let hora = 12

// if (hora >= 6 && hora < 12) {
//   console.log('Bom dia')
// } else if (hora >= 12 && hora < 18) {
//   console.log('Boa tarde')
// } else {
//   console.log('Boa noite')
// }

/* <=================== Switch Case ===================> */
// let permissao = 'Administrador'

// switch (permissao) {
//   case 'Administrador':
//   case 'Diretor':
//     console.log('Você tem permissão')
//     break
//   case 'Gerente':
//     console.log('Você não possui permissão')
//     break
//   default:
//     console.log('Você não está cadastrado no sistema')
//     break
// }

/* <=================== Laço de repetição ===================> */
/* =========== FOR ===========> */
// // console.log("Hello, WOrld!");
// // console.log("Hello, WOrld!");
// // console.log("Hello, WOrld!");
// // console.log("Hello, WOrld!");
// // console.log("Hello, WOrld!");

// for (let i = 0; i < 5; i++) {
//   console.log('Hello, World!', +i)
// }

// for (let index = 0; index <= 5; index++) {
//   if (index % 2 !== 0) {
//     console.log('Número ímpar: ' + index)
//   }
// }
/* =========== WHILE ===========> */
// let i = 1

// while (i < 5) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
//   i++
// }
/* =========== WHILE ===========> */
// let i = 0

// do {
//   console.log('Obrigado ' + i)
//   i++
// } while (i < 10)
/* =========== FOR-IN ===========> */
// const Felipe = { nome: 'Felipe', Idade: 18, Altura: 173, Peso: 85 }

// for (let key in Felipe) {
//   console.log(key + ': ' + Felipe[key])
// }

// const numeros = [15, 22, 85]
// for (let index in numeros) {
//   console.log('Valor do índice ' + index + ': ' + numeros[index])
// }
// /* =========== FOR-OF ===========> */
// let nomes = ['Felipe', 'Ryan', 'Gilvanda', 'Rildo', 'Irene']

// for (let valores of nomes) {
//   console.log(valores)
// }

// /* <=================== Factory Functions ===================> */
// const computador = {
//   gabinete: 'Torre',
//   peso: 2Kg
//   velocidadeProcessamento: 2.1Ghz,
//   tamanhoTela: '21 polegadas'
//   PadrõesTeclado: {
//      ABNT: 'português brasileiro sem ç',
//      ABNT2: 'português brasileiro com ç'
//   },
//   ligar: function () {
//     console.log('Ligando...')
//   }
// }

// function criarComputador(
//   gabinete,
//   peso,
//   velocidadeProcessamento,
//   tamanhoTela,
//   padroesTeclado
// ) {
//   return {
//     gabinete,
//     peso,
//     velocidadeProcessamento,
//     tamanhoTela,
//     padroesTeclado,
//     ligar: function () {
//       console.log('Iniciando...')
//     }
//   }
// }

// console.log(
//   criarComputador('Mid Tower', '5Kg', '2.8GHz', '23 polegadas', 'ABNT2')
// )

/* <=================== Construction Functions ===================> */
// function Computador(
//   gabinete,
//   peso,
//   velocidadeProcessmaento,
//   tamanhoTela,
//   padroesTeclado
// ) {
//   ;(this.gabinete = gabinete),
//     (this.peso = peso),
//     (this.velocidadeProcessmaento = velocidadeProcessmaento),
//     (this.tamanhoTela = tamanhoTela),
//     (this.padroesTeclado = function () {
//       console.log('Ligando...')
//     })
// }

// const computador = new Computador('Mid Tower', 2, '2.8GHz', 17, 'ABNT2')
// console.log(computador)

/* <=================== Natureza dinâmica de objetos ===================> */
// const celular = {
//   preco: 1500,
//   marca: 'Leeco'
// }

// celular.tela = 5.8
// celular.inicio = function () {
//   console.log('Obrigado por se integrar à melhor marca de celular do mundo.')
// }
// delete celular.inicio
// delete celular.tela

// console.log(celular)

/* <=================== Clonando objetos ===================> */
// const computador = {
//   gabinete: 'Torre',
//   peso: '2Kg',
//   velocidadeProcessamento: '2.1Ghz',
//   tamanhoTela: '21 polegadas',
//   PadrõesTeclado: {
//     ABNT: 'português brasileiro sem ç',
//     ABNT2: 'português brasileiro com ç'
//   },
//   ligar: function () {
//     console.log('Ligando...')
//   }
// }

// const clone = Object.assign(
//   {
//     proprietario: 'Felipe Castro Ferreira'
//   },
//   computador
// )

// console.log(clone)

/* <=================== Math ===================> */
