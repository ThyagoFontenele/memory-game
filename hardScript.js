var botaoStart = document.querySelector(".button");
var win = document.querySelector('#win');
var lose = document.querySelector('#lose');
var blockButton = document.querySelector('.blockButtons');
win.style.display = 'none';
lose.style.display = 'none';
var botoes = document.querySelectorAll('.botao');
var r = [];
let n;
let x;
var qntRep = 1;
function acendeLuz(num){
    const luz = document.querySelector(`#luz${num}`);
    luz.style.background = "#00ff55"

}

function start(){
    botaoStart.style.display = 'none';
    n = 0;
    
    for (let i = 0; i < qntRep; i++) {
        r.push(Math.ceil(Math.random()*9));
    }
   
    let interval = setInterval(() =>{
        
        if(n === qntRep) {
            clearInterval(interval);
            blockButton.style.display = "none";
        }
        piscaLuzes();
        
        x = r[n]-1
        n++;
    },1300)
        

}

function piscaLuzes(){
   setTimeout(() => {
       botoes[x].style.background = "#17da41"
       setTimeout(() => {
        botoes[x].style.background = ""
       }, 500)
   },700)
   
}
let acertos = 0;
let numeroSequencia = 0;
function resposta(num){
    if(num === r[numeroSequencia]){
        numeroSequencia++;
    }else{
        lose.style.display = '';
        setTimeout(() =>{
            document.location.reload(true);
        }, 1000);
        
    }

    if(numeroSequencia === qntRep) {
        numeroSequencia = 0;
        acertos++;
        acendeLuz(acertos);
        qntRep++;
        r=[];
        blockButton.style.display = "";
        start();
    }

    if(acertos === 6){
        acertos = 0;
        win.style.display = '';
        setTimeout(() =>{
            document.location.reload(true);
        }, 1000)
    }
}