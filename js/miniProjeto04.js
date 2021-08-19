// Verificar velocidade
// Velocidade máxima de até 70 Km
// A cada 5Km acima do limite você ganha 1 ponto na carteira
// Math.floor() - arrendondar valores
// Caso pontos seja maior que 12 -> "Carteira suspendida"

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70
  const kmPorPonto = 5
  if (velocidade <= velocidadeMaxima)
    return 'Você está dentro do limite de velocidade'
  else var multa = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
  if (multa > 12) return 'Carteira suspendida'
  else return 'Você recebeu ' + multa + ' pontos na carteira'
}

console.log(verificarVelocidade(71))
