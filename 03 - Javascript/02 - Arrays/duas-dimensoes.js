const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];

let listaDasMedias = [alunos, notas];

for(i = 0; i < alunos.length; i++){
    console.log(`${listaDasMedias[0][i]}, sua média é ${listaDasMedias[1][i]}`)
}
    
