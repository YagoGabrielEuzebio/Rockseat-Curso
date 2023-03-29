// 1. Declare uma variavel de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/*
    3. Declare uma variavel e atribua valores para cada um dos dados:
        *  name: String
        *  age: Number (interger)
        *  stars: Number (float)
        *  isSubscribed: Boolen
*/

// let name = 'Yago'
// let age = 17
// let stars = 1.81
// let isSubscribed = True

/*
    4. A variavel stundent abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg. 

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

// let student = {
//     name: 'Yago',
//     age: 17,
//     isSubscribed: true,
//     weight: 60
// }

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma varial do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

 let students = []

/*

    6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. ( Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

*/

students = [
    {
        name: 'Yago',
        age: 17,
        isSubscribed: true,
        weight: 60
    }
]

/*

    7. Coloque no console o valor da posição zero do Array acima

*/

    console.log(students[0])

/*

    8.  Crie um novo student e coloque na posição 1 do Array students

*/
    
    const allanis = {
        name: 'Allanis',
        age: 17,
        isSubscribed: false,
        weight: 65
    }

    students[1] = allanis
    console.log(students[1])
 