import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//--------------------------------------------------------------------------// 

document.body.style.backgroundColor = "green" 

const palos = ['♦', '♥', '♠', '♣']
const numeros = ['A','2','3','4','5','6','7','8','9','J','Q','K']
const backgrounds = ['red','black','yellow','blue','grey','brown','orange','pink','purple']
  
const random = arr => {
  let randomNumber =Math.floor(Math.random()*arr.length) 
  let randomValue = arr[randomNumber] 
  return randomValue 
}

const cardWrapper = document.createElement('div');
cardWrapper.id = 'contenedorPrincipal';
document.body.appendChild(cardWrapper); 

const divtop = document.createElement('div');
divtop.id = 'paloTop'
divtop.innerText = '6'
cardWrapper.appendChild(divtop);

const divMiddle = document.createElement('div');
divMiddle.id = 'valor'
divMiddle.innerText = '6'
cardWrapper.appendChild(divMiddle);

const divBottom = document.createElement('div');
divBottom.id = 'paloBottom';
divBottom.innerText= '6'
cardWrapper.appendChild(divBottom); 

const divBoton = document.createElement('div');
divBoton.id = 'divDelBoton'
document.body.appendChild(divBoton);

const buttonRandom = document.createElement('button');
buttonRandom.id = 'soyUnBoton';
buttonRandom.innerText = 'WE ARE STILL IN THE GAME BABY!'
divBoton.appendChild(buttonRandom);

const divBoton2 = document.createElement('div');
divBoton2.id = 'divDelBoton2'
document.body.appendChild(divBoton2);

const buttonRandom2 = document.createElement('button');
buttonRandom2.id = 'soyUnBoton2';
buttonRandom2.innerText = 'Wanna change?'
divBoton2.appendChild(buttonRandom2);

function crearCarta () { 
let randomPalos = random(palos);

let randomNumeros = random(numeros);

    document.getElementById("paloTop").innerHTML = randomPalos
    document.getElementById("valor").innerText = randomNumeros
    document.getElementById("paloBottom").innerText = randomPalos
    
    if ( randomPalos === '♦' || randomPalos === '♥' ) {
      divMiddle.style.color ='red'
      divtop.style.color = 'red'
      divBottom.style.color = 'red'
    }
    else {
      divMiddle.style.color ='black'
      divtop.style.color = 'black'
      divBottom.style.color = 'black'
    }

}

function cambiarBackground () {
  let backgroundColor = random(backgrounds);
  document.body.style.backgroundColor = backgroundColor
  return backgroundColor
}

document.getElementById('soyUnBoton').addEventListener ('click', crearCarta)

document.getElementById('soyUnBoton2').addEventListener ('click', cambiarBackground)




  


//'♦', '♥', '♠', '♣'


   
   







  
   
    








