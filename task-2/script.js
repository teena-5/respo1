const display = document.getElementById("display");
const lapsContainer = document.getElementById("laps");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let lapCount = 1;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
    lapsContainer.innerHTML = "";
}
function lap() {
  if (isRunning) {
    const currentTime = Date.now();
    const lapTime = currentTime - startTime;
    const formattedTime = formatTime(lapTime);
    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount}: ${formattedTime}`;
    lapsContainer.appendChild(li);
    lapCount++;
  }
}
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  let hours = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let seconds = Math.floor((time / 1000) % 60);
  let milliseconds = Math.floor((time % 1000) / 10);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(unit) {
  return unit.toString().padStart(2, '0');
}
