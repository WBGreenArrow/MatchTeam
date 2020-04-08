
    const Nomes = [];
    const Time1 = [];
    const Time2 = [];

    var buttonElement = document.querySelector('.body-container button');
    var listElement = document.querySelector('#app ul');
    var listElement1 = document.querySelector('#app2 ul');

    var timeText1 = document.querySelector('#app h2');
    
    var TeamNumber1 = document.createTextNode('Time 1')

    var timeText2 = document.querySelector('#app2 h2');

    var TeamNumber2 = document.createTextNode('Time 2')


    var Clicked = false;
    buttonElement.onclick = GerarTeam;

    function GerarTeam () {

        if(!Clicked) {

        var name1 = document.getElementById('1').value;
        var name2 = document.getElementById('2').value;
        var name3 = document.getElementById('3').value;
        var name4 = document.getElementById('4').value;
        var name5 = document.getElementById('5').value;
        var name6 = document.getElementById('6').value;
        var name7 = document.getElementById('7').value;
        var name8 = document.getElementById('8').value;
        var name9 = document.getElementById('9').value;
        var name10 = document.getElementById('10').value;
        var name11 = document.getElementById('11').value;
        var name12 = document.getElementById('12').value;

        Nomes.push(
            name1,
            name2,
            name3,
            name4, 
            name5, 
            name6, 
            name7, 
            name8, 
            name9, 
            name10, 
            name11, 
            name12 );
    
            while (Time1.length !== 6) {
    
    var a = Nomes[~~(Nomes.length * Math.random())];

      Time1.push(a);

      Nomes.splice(Nomes.indexOf(a), 1);

      var b = Nomes[~~(Nomes.length * Math.random())]; 

      Time2.push(b);

      Nomes.splice(Nomes.indexOf(b), 1);
        
    }

    timeText1.appendChild(TeamNumber1);

    timeText2.appendChild(TeamNumber2);

        MostrarTimes();

function MostrarTimes(){

    for (Jogadores of Time1){

        var marcardorJogador = document.createElement('li');
        var jogadorText = document.createTextNode(Jogadores);

    marcardorJogador.appendChild(jogadorText)
    listElement.appendChild(marcardorJogador);

    }

    for (Jogadores2 of Time2){
      var marcardorJogador2 = document.createElement('li');
      var jogadorText2 = document.createTextNode(Jogadores2);

    marcardorJogador2.appendChild(jogadorText2)
    listElement1.appendChild(marcardorJogador2); 

     } 

    }

    Clicked = true;

  }else{
    alert("Os times já foram gerados")
  }
}

