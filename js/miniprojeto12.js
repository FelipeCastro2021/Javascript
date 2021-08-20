// Criar objeto postagem de blog
// - Tìtulo
// - Mensagem
// - Autor
// - Visualizações
// - Comentários (autor, mensagem)
// - estaAoVivo

let postagem = {
  titulo: 'Programação para todos',
  mensagem: 'Não se engane achando que programação é difícil',
  autor: 'Felipe Castro Ferreira',
  visualizacoes: 12,
  comentarios: [
    {
      autor: 'Ryan Castro Ferreira',
      mensagem: 'Já faz tempo desde que passei dessa fase!'
    },
    {
      autor: 'Ryan Castro Ferreira',
      mensagem: 'Já faz tempo desde que passei dessa fase!'
    },
    {
      autor: 'Ryan Castro Ferreira',
      mensagem: 'Já faz tempo desde que passei dessa fase!'
    }
  ],
  estaAoVivo: true
}

console.log(postagem)
