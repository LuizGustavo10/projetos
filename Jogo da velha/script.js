//criando um variável, espaço de memória que armazena um valor
var jogador = "x";

//uma função executa alguma ação, quando chamada
//celula é um parâmetro, o valor da celular clicada é passado para a função
function jogar(celula){

    //se a célula estiver vazia, pode marcar
    // == iGUAL
    // != DIFERENTE
    //  > MAIOR
    //  < MENOR
    if(celula.innerHTML == ""){
        //escrever na célula o "X" ou "O"
        celula.innerHTML = jogador;
        //se jogador for igual a "X"
        if(jogador == "x"){
            jogador = "o";      //alterna a váriavel para "O"
            celula.style.backgroundColor = "red"; //altera cor do fundo
            celula.style.color = "black";         //altera cor da letra
        }  else {
            jogador = "x";      //se não alterna a váriavel para "X"
            celula.style.backgroundColor = "blue";
            celula.style.color = "white";
        }
    }   
}

function reiniciar(){
    //criar lista com todos os quadrados
    var celulas = document.querySelectorAll("td");

    for(var contador=0; contador < 9; contador ++){
        celulas[contador].innerHTML = "";
        celulas[contador].style.backgroundColor = "";
    }
}

var nomes = ['Isabela', 'Bruno', 'Rafael', 'Angelo', ];

function sortear(){
    //lista / vetor
    //entre aspas é ums String: tipo de dados de texto
    //              0           1         2        3

    var nome1 = nomes[ Math.floor( Math.random() * nomes.length) ];
    var nome2 = nomes[ Math.floor( Math.random() * nomes.length) ];
    
    //enquanto nome1 === nome2
    if(nome1 === nome2){
        sortear();
    }else{
        alert("Jogador: " + nome1 + " vs " + nome2);
        //escrever na tela
        document.getElementById('jogador1').textContent = nome1;
        document.getElementById('jogador2').textContent = nome2;
    }
    
    /*
    alert("Sorteio de número com random" + Math.random());
    alert("Encontrando posição da lista: " + Math.random() * nomes.length);
    alert("Encontrando posição da lista 2: " +Math.floor(Math.random()*nomes.length));
    */
}

function adicionar(){
    //pega o texto do input com id="nome"
    var nome = document.getElementById("nome").value;
    //adiciona nome na lista
    nomes.push(nome);

}