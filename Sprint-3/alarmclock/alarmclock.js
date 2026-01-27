let interval;
let remainingTime;

function setAlarm() {
  let inputNumber = Number(document.getElementById("alarmSet").value); //input field
  let timeRemainingOutput = document.getElementById("timeRemaining"); //text of time remaining

  clearInterval(interval);
  interval = setInterval(() => {
    if (inputNumber <= 0) {
      clearInterval(interval);
      timeRemainingOutput.textContent = "Time remaining: 00:00:00";
      playAlarm();
      return;
    }

    inputNumber--;

    let hours = Math.floor(inputNumber / 3600);
    let minutes = Math.floor((inputNumber % 3600) / 60);
    let seconds = Math.floor(inputNumber % 60);

    timeRemainingOutput.textContent = `Time Remaining: ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopAlarm() {
  // let inputNumber = Number(document.getElementById("alarmSet").value); //input field
  // let timeRemainingOutput = document.getElementById("timeRemaining"); //text of time remaining

  // inputNumber = 0;

  // interval = stopInterval(() => {
  //   if (inputNumber <= 0) {
  //     clearInterval(interval);
  //     timeRemainingOutput.textContent = "Time remaining: 00:00:00";
  //     return;
  //   }
  // }, 1000);
  clearTimeout(interval);
  return (timeRemainingOutput.textContent = "Time remaining: 00:00:00");
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
