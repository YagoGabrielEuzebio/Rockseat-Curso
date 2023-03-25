function calculate(a, operator, b) {
    let result = 0;

    switch (operator) {
        case '+':
            result = a + b
            break

        case '-':
            result = a - b
            break

        case '*':
            result = a * b
            break

        case '/':
            result = a / b
            break
        
        default:
            console.log('Operador não existe!')
    }

    return result
}

console.log(calculate(3, '%', 2))