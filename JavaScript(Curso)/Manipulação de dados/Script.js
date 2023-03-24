// 1. Transformar String em Numero e Numero em string

// let string = '123'

// console.log(Number(string))

// let number = 321

// console.log(String(number))

// 2. Contar quantos caracteres tem uma palavra e quantos digitos tem um número

// let word = 'Paralelepipedo'
// console.log(word.length)

// 3. Transformar um numero quebrado em 2 casa decimais e trocar ponto por virgula

// let number = 545.31232142354
// console.log(number.toFixed(2).replace(".", ","))

// 4. Transforme letras minusculas em maiusculas. Faça o contrario disso tambem

// let word = "Programar é muito bacana!"
// console.log(word.toLowerCase())
// console.log(word.toUpperCase())

// 5. Separe um texto que contem espaço, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto onde eram espaços, coloque _

// let text = "Eu quero viver o Amor!"
// let myArray = text.split(" ")
// console.log(myArray)
// let textwithunderscore = myArray.join("_")
// console.log(textwithunderscore)

// 6. Verificar se o texto contem a palavra Amor

// let text = 'Eu quero viver o Amor!'
// console.log(text.includes("Amor"))

// 7. Criar Array com construtor

// let myArray = new Array[10] Array com 10 espaços vazios
// console.log(myArray)

// 8. Contar elementos de uma Array

// console.log(['a', 'b', 'c'].length)

// 9. Transformar uma cadeia de caracteres em elementos de um array

// let word = 'manipulação'
// console.log(Array.from(word))

// 10. Manipulando Arrays

let techs = ['html', 'css', 'js']

// 10.1 Adicionar um item no fim
techs.push('node.js')
techs.push('Allanis Gostosa')

// 10.2 Adicionar um item no começo
techs.unshift("sql")

// 10.3 Remover do fim
techs.pop()

// 10.4 remover o começo
techs.shift()

// 10.5 pegar somente alguns elementos da array
// console.log(techs.slice(1, 5))

// 10.6 Remover 1 ou mais items em qualquer posição do Array
// techs.splice(1 )

// 10.7 Encontrar a posição de um elemento no array
let index =  techs.indexOf('html')
techs.splice(1, 1)

console.log(index)
console.log(techs)
