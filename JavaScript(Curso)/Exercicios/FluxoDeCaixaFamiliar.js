let family = {
    incomes: [2545, 244, 2412.12, 441],
    expenses: [3444.24, 1234.11, 5123, 114,]
}

function sum(array) { // Function create for to do sum  from the value past at expresion

    let total = 0;

    for (let value of array) { // Repetition structud create for values sum from array and store this value in total variavel
        total += value
    }

    return total
}

function calc() {
    const calculateIncomes = sum(family.incomes) // Pull the incomes from the variavel family. .
    const calculateExpenses = sum(family.expenses) // Pull the expenses from the variavel family. 

    const total = calculateIncomes - calculateExpenses // Subtraction of incomes and expenses. 

    
    if (total < 0) { // Balance Negative
        console.log('The family this is with balance negative.')
        console.log(`Balance: R$${total.toFixed(2).replace(".", ",")}`)
    } else { // Balance Positive
        console.log('The family this is with balance positive.')
        console.log(`Balance: R$${total.toFixed(2).replace(".", ",")}`)
    }

    return total
}

calc()