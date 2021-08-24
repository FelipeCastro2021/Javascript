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

// function criarComputador(gabinete,peso,velocidadeProcessamento,tamanhoTela,padroesTeclado) {
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
// function exibirMaior(max, min) {
//   for (let i = 0; i < max; i++) {
//     console.log(Math.floor(Math.random() * (max - min + 1) + min))
//   }
// }

// let quadrada = Math.sqrt(81)
// console.log(quadrada)

// exibirMaior(15, 2)

/* <=================== Strings ===================> */
// // Tipo primitivo
// const mensagem = ' Sempre acreditei no meu sonho! '
// // Tipo objeto
// const outraMensagem = new String('Nova mensagem!')

// // Comprimento da string
// console.log(mensagem.length)

// // Verifica se o que digitou existe na String
// console.log(mensagem.includes('Sempre'))

// // Informa o índice da String objeto
// console.log(outraMensagem[0])

// // Verifica se a string se inicia com a informação descrita
// console.log(mensagem.startsWith('acreditei'))

// // Substitui a informação pela passada
// console.log(mensagem.replace('meu', 'seu'))

// // Retira os espaços excedentes da String
// console.log(mensagem.trim())

// // A partir do valor passado, irá partir a string num array
// console.log(mensagem.split(' '))

/* <=================== Template Literal ===================> */
// const mensagem = `oi, isso é a
// minha primeira 'string'`

// let nome = 'Felipe'

// const email = `Bom dia, ${nome}.

// Estou falando em nome da empresa tal.

// Você está perdendo a grande oportunidade de melhorar sua vida.

// Entre para o nosso curos e aprenda a ser o melhor programador do mundo.

// Obrigado,
// Felipe Castro`

// console.log(mensagem)
// console.log('=====================================')
// console.log(email)

/* <=================== Template Literal ===================> */
// const hoje = new Date()

// console.log(hoje)

// const data1 = new Date('August 20 2021 08:57')
// const data2 = new Date(2021, 07, 20, 8, 57) // Ele começa a contar o mês a partir do zero

// console.log(data1)
// console.log(data2)

// console.log(date1)

/* <=================== Igualdade de objetos ===================> */
// function endereco(rua, cidade, CEP) {
//   this.rua = rua
//   this.cidade = cidade
//   this.CEP = CEP
// }

// const endereco1 = new endereco('Rua das Oliveiras', 'Itaquaquecetuba', 454984)
// const endereco2 = new endereco('Rua das Oliveiras', 'Itaquaquecetuba', 454984)

// function Igualdade(endereco1, endereco2) {
//   return (
//     endereco1.rua === endereco2.rua &&
//     endereco1.cidade === endereco2.cidade &&
//     endereco1.CEP === endereco2.CEP
//   )
// }

// function temEnderecoMemoriaIgual(endereco1, endereco2) {
//   return endereco1 === endereco2
// }

// console.log(Igualdade(endereco1, endereco2))
// console.log(temEnderecoMemoriaIgual(endereco1, endereco2)) // Não estão alocados no mesmo local na memória

/* <=================== Introdução a arrays ===================> */
/* <====== Adicionar elementos a um array ======> */
// const array = [1, 2, 3]

// // Início
// array.unshift(0)

// console.log(array)

// // Meio
// array.splice(2, 0, 1.5)
// console.log(array)

// // Fim
// array.push(4)
// console.log(array)

/* <====== Encontrando elementos primitivos ======> */
// let array = [1, 2, 3, 4]
// // Procura se o valor inserido no array e informa qual o índice, caso não encontre, retorna -1
// console.log(array.indexOf(3))
// // Forma difícil para verificar se aquele elemento existe dentro do array
// console.log(array.indexOf(3) !== -1)
// // Forma fácil para verificar se um elemento existe dentro do array com ES6
// console.log(array.includes(3))

/* <====== Encontrando elementos do tipo de referência ======> */
// let pessoas = [
//   { nome: 'Felipe', idade: 18, escolaridade: 'Cursando ensino superior' },
//   { nome: 'Ryan', idade: 18, escolaridade: 'Cursando ensino superior' },
//   { nome: 'Toninho', idade: 25, escolaridade: 'Ensino superior completo' }
// ]

// let pessoa = pessoas.find(function (pessoas) {
//   return (pessoas.nome = 'Ryan')
// })

// console.log(pessoa)

/* <====== Arrow Function ======> */
// const carros = [
//   { nome: 'Gol', marca: 'Fiat', ano: 2019 },
//   { nome: 'Compass', marca: 'Jeep', ano: 2013 }
// ]

// let carro = carros.find(carros => carros.ano == '2013')
// console.log(carro)

/* <====== Removendo elementso do array ======> */
// let alfabeto = ['a', 'b', 'c', 'd', 'e']
// let alfabeto2 = alfabeto

// console.log(alfabeto)
// // Final
// alfabeto.pop()
// console.log(alfabeto)
// // Início
// alfabeto.shift()
// console.log(alfabeto)
// //Meio
// alfabeto.splice(2, 1)
// console.log(alfabeto)

/* <====== Esvaziando um Array ======> */
// let pares = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// let pares2 = pares

// console.log(pares, pares2)

// pares.length = 0
// console.log(pares, pares2)

// pares.pop(pares.lenght)
// console.log(pares, pares2)

// pares.splice(0, pares.lenght)
// console.log(pares, pares2)

/* <====== Combinando um array ======> */
// const numeros1 = [{ valor: 5 }, { valor: 7 }, { valor: 15 }]
// const numeros2 = [4, 5, 6]

// console.log(numeros1[1].valor)

// numeros1[0].valor = 1
// numeros1[1].valor = 2
// numeros1[2].valor = 3

// /* Combinar valores */
// let combinado = numeros1.concat(numeros2)
// console.log(combinado)

// /* Dividir valores */
// let dividido = combinado.slice(2, 4) // Está pegando os índices 2 e 3
// dividido = combinado.slice()
// console.log(dividido)

/* <====================== Operador Spread ==============================> */
// const numeros = [1, 2, 3]
// const alphabet = ['a', 'b', 'c']
// const combinado = [...numeros, '4', ...alphabet, 'd']
// console.log(combinado)

// const clonado = [...combinado]
// console.log(clonado)

// // Atividade
// const numeros1 = [1, 2, 3]
// const numeros2 = [4, 5, 6]
// const combinar = [...numeros1, '%', ...numeros2]
// const clone = [...combinar]

// console.log(clone)

/* <====================== For Each ==============================> */
// const numeros = [1, 2, 3, 4, 5, 6]

// numeros.forEach((numeros, indice) => console.log(numeros, indice))

// // for (let percorrer of numeros) console.log(percorrer)

// const pares = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// pares.forEach(pares => console.log(pares))

/* <====================== Combinando arrays ==============================> */
// const numbers = [0, 1, 2, 3]
// const alterarArray = numbers.join('.')

// console.log(alterarArray)

// const frase = 'Obrigado por tudo que você vem fazendo pela nossa família!'
// const separado = frase.split(' ')
// const juntos = separado.join('-')

// console.log(juntos)

// const recado = 'Fazendo teste com combinação de arrays'
// const separado = recado.split(' ')
// const junto = separado.join('-')

// console.log(separado)
// console.log(junto)

/* <====================== Recebendo dados (INPUT) ==============================> */
// let idade = prompt('Qual é a sua idade: ', 18)

// if (idade >= 18) console.log('Você é maior de idade')
// else console.log('Você é menor de idade')

/* <================== Introdução à manipulação do DOM (Document Object Model) ============================> */
// const value = (document.getElementById('text').value = 'Texto')
// const text = (document.getElementById('text').innerText = 'Texto')
// const HTML = (document.getElementById('text').innerHTML = 'Texto')

// const classe = (document.getElementsByClassName('item')[0].value =
//   'Funcionando')
