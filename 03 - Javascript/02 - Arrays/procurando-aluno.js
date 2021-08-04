const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];

let listaDasMedias = [alunos, notas];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDasMedias[0].includes(nomeDoAluno)){
        indice = listaDasMedias[0].indexOf(nomeDoAluno)
        return listaDasMedias[0][indice] + ", sua média é " + listaDasMedias [1][indice]
    }else{
        return "Aluno não encontrado."
    }
}    

console.log(exibeNomeNota('Roberto'))