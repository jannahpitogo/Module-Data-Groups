let hourFloat = inputNumber / 3600;
let hours = Math.floor(hourFloat);
let hoursRemainder = hourFloat - hours;
let minutesFloat = hoursRemainder * 60;
let minutes = Math.floor(minutesFloat);
let minutesRemainder = minutesFloat - minutes;
let seconds = Math.floor(minutesRemainder * 60);

function setAlarm() {
  const inputNumber = Number(document.getElementById("alarmSet").value); //input field
  const timeRemainingOutput = document.getElementById("timeRemaining"); //text of time remaining
}

function convert() {
  if (seconds === 0) {
    minutes = minutes - 1;
    seconds = seconds + 60;
  }
  if (minutes === 0) {
    hours = hours - 1;
    minutes = minutes + 60;
  }
  if ((seconds, minutes, hours === 0)) {
    clearInterval;
  }

  let remainingTime = `${hours}:${minutes}:${seconds}`;
  return remainingTime;
}

const interval = setInterval(() => {
  timeRemainingOutput.textContent = remainingTime;
}, 1000);

function timeInterval() {
  inputNumber;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
