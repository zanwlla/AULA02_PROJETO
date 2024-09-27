var area= document.getElementById("area")

function entrar() {
    var nome = prompt("Digite seu nome:");

    if(nome=== " "||nome ===null){
        alert("Algo deu errado");
        area.innerHTML = "Clique no botão para acessar";
    }else{
         //area.innerHTML="Clique no botão para acessar"
            area.innerHTML = 'Bem vindo ' + nome + " ";

                let botaoSair = document.createElement("button");
                    botaoSair.innerText="Sair da conta";
                         botaoSair.onclick=sair;

                            area.appendChild(botaoSair);
    }
}
function sair(){
        alert("Até mais!");
            area.innerHTML="Você saiu";
}

//criar uma função com parâmetros
function mediaAluno(nota1,nota2){
    var media= (nota1+nota2)/2;

    if(media>=6){
        console.log("Que lindeza, você foi aprovado com média "+media);
    }else if(media<6){
        console.log("Que lamentável, você reprovou com média "+media);
    }
}

function aluno(nome,curso){
    console.log("Bem vindo "+nome+" ao curso de "+curso);
}

