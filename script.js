/*------------ATIVIDADE 03

  Capture 02 pessoas para compor a lista de estudantes.
  
  Após capturar as 02 pessoas, imprima-os, separando por vírgula.

-----------------------*/

alert(`Olá, me chamo ricarlosgp@gmail.com e sou estudante de desenvolvimento web front-end. 
Nesse teste estou capturando nome de dois estudantes para compor uma lista.
Pode me ajuda? Obrigado!`)


let students = []; //array vazio para receber os nomes

for(let student = 0; student < 2; student ++ ) //laço de repetição for para que não passe de duas pessoas 
{
    let studentName = prompt(`Você é o estudante de Nº` + (student + 1) + //declarando uma nova variável para imprmir
    `. 
Digite o seu nome.`)

    students[student] = studentName //reatribuindo a variável let students[] para sutendts e adicionando as pessoas dentro do array[student] recebendo a variavel studeName que é a impressão em tela
}

alert ("Os estudantes são: " + students+".") //inseriando um texto concatenando com a lista de estudante a ser impressa em tela


