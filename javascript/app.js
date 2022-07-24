const time1 = document.getElementById("timer1");
const time2 = document.getElementById("timer2");
const time3 = document.getElementById("timer3");
const btnapp = document.getElementById("btn-app");

const startingMinutes = 25;
let time = startingMinutes * 60;


function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  
  seconds = seconds < 10 ? '0' + seconds : seconds;
  cuenta = `${minutes}:${seconds}`;
  time--;
  time1.innerHTML = cuenta;
  if(cuenta == '0:00'){
    console.log("aguante el rojo")
    clearInterval(caca);
  }
}

btnapp.addEventListener("click",()=>{setInterval(updateCountdown, 1000)})