// Criar um objeto postagem na construction function
// - Título
// - Mensagem
// - Autor
// - Visualizações
// - Array (comentário)
// - estaAoVIvo

function Postagem(titulo, mensagem, autor) {
  ;(this.titulo = titulo),
    (this.mensagem = mensagem),
    (this.autor = autor),
    ((this.visualizacoes = 0), (this.comentario = [])),
    (this.estaAoVivo = false)
}

// Visualizações não pode ser inserida por ser dinâmico
// Comentários não irão ser passados por ser um objeto que será criado na função

Postagem('Titulo', 'Mensagem', 'Autor')
