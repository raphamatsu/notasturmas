const aluno1 = {
    nome: "Raphael",
    turma: "Turma A",
    matematica: 10,
    ciencias: 8,
    portugues: 7,
    historia: 5,
    geografia: 2
}

const aluno2 = {
    nome: "Diogo",
    turma: "Turma B",
    matematica: 7,
    ciencias: 5,
    portugues: 2,
    historia: 4,
    geografia: 1
}

function preencherturmaA() {
    document.getElementById("aluno").innerHTML = `
    <td>${aluno1.nome}</td>
    <td>${aluno1.matematica}</td>
    <td>${aluno1.ciencias}</td>
    <td>${aluno1.portugues}</td>
    <td>${aluno1.historia}</td>
    <td>${aluno1.geografia}</td>`
}

preencherturmaA()

function preencherturmaB() {
    document.getElementById("aluno").innerHTML = `
    <td>${aluno2.nome}</td>
    <td>${aluno2.matematica}</td>
    <td>${aluno2.ciencias}</td>
    <td>${aluno2.portugues}</td>
    <td>${aluno2.historia}</td>
    <td>${aluno2.geografia}</td>`
}

document.querySelector("select[name=turma]").addEventListener("change", preencherturmaB)