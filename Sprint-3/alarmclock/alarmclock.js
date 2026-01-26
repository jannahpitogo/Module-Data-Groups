function setAlarm() {
  const inputNumber = document.getElementById("alarmSet").value; //input field
  const timeRemainingOutput = document.getElementById("timeRemaining"); //text of time remaining
  timeRemainingOutput.textContent = `Time Remaining ${inputNumber}`;
}

function getTime(clock) {
  const hours = Math.floor(inputNumber / 3600);
  const hoursRemainder = inputNumber - hours;
  const minutes = Math.floor(hoursRemainder * 60);
  const minutesRemainder = hoursRemainder - minutes;
  const seconds = Math.floor(minutesRemainder * 60);
  const secondsRemainder = minutesRemainder * 60;
  // if (hours.length > 1) { To continue, making an if for dispaying the numbers. If it's more than 2 digits of hours u need to display it and if 1 only you have to add 0
  // }
  const time = `hours`;
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
