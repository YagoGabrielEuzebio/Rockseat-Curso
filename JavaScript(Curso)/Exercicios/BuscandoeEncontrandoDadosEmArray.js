const booksByCategory = [
    {
        category: "Riqueza",
        books : [
            {
                tittle: "Os segredos da mente milionaria",
                author: "T. Harv Eker"
            },
            {
                tittle: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                tittle: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },

    {
        category: "Inteligência Emocional" ,
        books: [
            {
                tittle: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                tittle: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                tittle: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

for (let category of booksByCategory) { // pegando uma categoria da array booksByCategory
    console.log('Total de livros de cada categoria:', category.category)
    console.log(category.books.length)
}

function contAuthors() { // Função que verifica quantos autores existe dentro da array.
    let authors = [];

    for (let category of booksByCategory) { // Estrutura de repetição para navegar dentro da categorias.
        for(let book of category.books) { // Estrutura de repetição para achar o nome dos autores.
            if(authors.indexOf(book.author == -1)) { // Estrura de condição para verificar se contém o nome do author na array.
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

contAuthors()

function booksOfAuthor(author) { // Função que quantos livros do autor digitado existe.
    let books = [];

    for (let category of booksByCategory) { // Estrutura de repetição para navegar dentro da categorias.
        for(let book of category.books) { // Estrutura de repetição para achar o nome do autor digitado.
            if(book.author === author) { // Estrura de condição para verificar quantos livros do autor digitado existe.
                books.push(book.tittle)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`) // Transformando uma array em string usando "join"
}

booksOfAuthor('George S. Clason')