class livro {
    constructor(titulo, autor, ano, genero) {
        this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.genero = genero;
    }

exibirinformações() {
    return '${this.titulo} por ${this.autor} ($ {this.ano}) - genero: ${this.genero}';
}
}

class biblioteca {
    constructor() {
        this.livros = [];

    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        this.atualizarExibicao();
    }

    removerLivro(index) {
        this.livros.splice(index, 1);
        this.atualizarExibicao();
    }

    atualizarExibicao() {
        const lista = document.getElementById('bookList');
        lista.innerHTML = '';

        this.livros.forEach((livro, index) => {
            const item = document.createElement('li');
            item.textContent = livro.exibirinformações();
            divLivro.classList.add('book');

            lista.appendChild(divLivro);
            
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                this.removerLivro(index);
            });
        });
    }
}

const biblioteca = new biblioteca();

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const ano = document.getElementById('year').value;
    const genero = document.getElementById('genre').value;

    const novoLivro = new livro(titulo, autor, ano, genero);
    biblioteca.adicionarLivro(novoLivro);
    this.reset();
});