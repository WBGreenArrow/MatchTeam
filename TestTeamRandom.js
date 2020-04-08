

const Nomes = [
    'WELLISON',
    'LUCAS',
    'EDENILSON',
    'CLENIS',
    'ELSON',
    'RONALDO',
    'WANDERSON',
    'EDUARDO',
    'TIAGO',
    'JHEIME',
    'MANIM',
    'MAYARA',
];
const Time1 = [];
const Time2 = [];
 

/*
var readline = require ('readline-sync');
var name1 = readline.question ("Nome do Jogador 1: ");
var name2 = readline.question ("Nome do Jogador 2: ");
var name3 = readline.question ("Nome do Jogador 3: ");
var name4 = readline.question ("Nome do Jogador 4: ");
var name5 = readline.question ("Nome do Jogador 5: ");
var name6 = readline.question ("Nome do Jogador 6: ");
var name7 = readline.question ("Nome do Jogador 7: ");
var name8 = readline.question ("Nome do Jogador 8: ");
var name9 = readline.question ("Nome do Jogador 9: ");
var name10 = readline.question ("Nome do Jogador 10: ");
var name11 = readline.question ("Nome do Jogador 11: ");
var name12 = readline.question ("Nome do Jogador 12: ");

Nomes.push(name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12);*/
   

    function GerarTeam () {

    while (Time1.length !== 6) {
 
        var a = Nomes[~~(Nomes.length * Math.random())];

         Time1.push(a);

         Nomes.splice(Nomes.indexOf(a), 1);

         var b = Nomes[~~(Nomes.length * Math.random())]; 

         Time2.push(b);

         Nomes.splice(Nomes.indexOf(b), 1);

    }

    }

        GerarTeam();
       console.log(Nomes);
         console.log(Time1);
        console.log(Time2);      



//for(i = 0; i >= Nomes.length(); i++){

//}


/*function AddNomeTime1(){
    
    var myJSON = JSON.stringify(Nomes);

    return console.log (myJSON);
    
}

AddNomeTime1();

*/
