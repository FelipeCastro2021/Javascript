// Divísivel por 3 = Fizz
// Divisível por 5 = Buzz
// Divisível por 3 e 5 = FizzBuzz
// Quando não é divisível por nenhum deles = Retorna o próprio valor
// Se não for um número = "Não é um número"

function FizzBuzz(number) {
  if (typeof number !== 'number') return 'Não é um número'
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
  if (number % 3 === 0) return 'Fizz'
  if (number % 5 === 0) return 'Buzz'

  return number
}

console.log(FizzBuzz(15))
