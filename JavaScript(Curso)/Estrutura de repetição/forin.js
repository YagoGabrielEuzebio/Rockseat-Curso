let Person = {
    name: 'Yago',
    age: '17',
    weight: 60.2
}

for (let property in Person) {
    console.log(property)
    console.log(Person[property])
}