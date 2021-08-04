const arrayNums = [1, 2, 3, 4]

const numerosAtualizados = arrayNums.map(multiplicador)

function multiplicador(num){
    return num * 10
}

console.log(numerosAtualizados)