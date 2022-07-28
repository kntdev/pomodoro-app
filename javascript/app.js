const timer = document.getElementById("timer");

const btnapp = document.getElementById("btn-app");
const sound = document.getElementById("sound");
const btnpomodoro = document.getElementById("btn-pomodoro");
const btnshort = document.getElementById("btn-short");
const btnlong = document.getElementById("btn-long");

var valor = 25;

btnshort.addEventListener("click",(valor)=>{
  valor = 5;
  return  
});
btnlong.addEventListener("click",(valor)=>{
  valor = 15;
  return  
});
btnpomodoro.addEventListener("click",(valor)=>{
  valor = 25;
  return  
});

startingMinutes = valor;

let time = startingMinutes * 60;

function updateCountdown() {
const minutes = Math.floor(time / 60);
let seconds = time % 60;

seconds = seconds < 10 ? '0' + seconds : seconds;
cuenta = `${minutes}:${seconds}`;
time--;
timer.innerHTML = cuenta;
if(cuenta == '0:00'){
  sound.innerHTML='<audio src="./assets/notification.mp3" autoplay></audio>';
  clearInterval(temporizador);
}
}

btnapp.addEventListener("click",()=>{
temporizador = setInterval(updateCountdown, 1000);
});