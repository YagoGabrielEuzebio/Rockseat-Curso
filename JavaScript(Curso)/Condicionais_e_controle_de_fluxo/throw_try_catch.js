// throw 


function sayMyName(name = 'a') {
    if (name === '') {
        throw new Error("Nome é obrigatório!")
    }

    console.log(name)
}

console.log('Após o throw')

// try..catch

try {
    sayMyName('Yago')
} catch(e) {
    console.log(e)
}

console.log('Após o try/catch')