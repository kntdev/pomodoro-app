const timer = document.getElementById("timer");

const btnapp = document.getElementById("btn-app");
const sound = document.getElementById("sound");
const btnpomodoro = document.getElementById("btn-pomodoro");
const btnshort = document.getElementById("btn-short");
const btnlong = document.getElementById("btn-long");

function valor(a){
  console.log(a)
  return a
}

 const tPomodoro = valor(25);
 const tLong = valor(15);
 const tShort = valor(5);

btnpomodoro.addEventListener("click",()=>{
  startingMinutes = tPomodoro;
});
btnshort.addEventListener("click",()=>{
  startingMinutes = tShort;
});
btnlong.addEventListener("click",()=>{
  startingMinutes = tLong;
});

startingMinutes = null;

timer.innerHTML = startingMinutes;

let time = startingMinutes * 60;

function updateCountdown() {
let minutes = Math.floor(time / 60);
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