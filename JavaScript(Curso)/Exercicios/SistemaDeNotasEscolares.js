let score = 55

function getScore(score) {

    let scoreA = (score >= 90 && score == 100)
    let scoreB = (score >= 80 && score <= 89)
    let scoreC = (score >= 70 && score <= 79)
    let scoreD = (score >= 60 && score <= 69)
    let scoreF = (score < 60 && score >= 0)

    let endScore;

    switch (true) {
        case scoreA:
            endScore = 'Nota A'
            return endScore
            break

        case scoreB:
            endScore = 'Nota B'
            return endScore
            break

        case scoreC:
            endScore = 'Nota C'
            return endScore
            break

        case scoreD:
            endScore = 'Nota D'
            return endScore
            break

        case scoreF:
            endScore = 'Nota F'
            return endScore
            break
        
        default:
            let invalidValue = 'Valor Invalido!'
            return invalidValue
            break
    }
}

console.log(getScore(0))