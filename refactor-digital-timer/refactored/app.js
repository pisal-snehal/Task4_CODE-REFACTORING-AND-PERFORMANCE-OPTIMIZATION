//
// Select DOM elements
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

// Timer variables
let startTime = 0;
let elapsedTime = 0;
let isPaused = true;
let intervalId = null;

// Start Button Event
startBtn.addEventListener("click", startTimer);

// Pause Button Event
pauseBtn.addEventListener("click", pauseTimer);

// Reset Button Event
resetBtn.addEventListener("click", resetTimer);

// Start the timer
function startTimer() {
  if (isPaused) {
    isPaused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTimer, 1000);
  }
}

// Pause the timer
function pauseTimer() {
  if (!isPaused) {
    isPaused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
}

// Reset everything
function resetTimer() {
  isPaused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
}

// Update time every second
function updateTimer() {
  elapsedTime = Date.now() - startTime;

  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);

  timeDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Pad with zero if needed
function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}
