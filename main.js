let totalMilliseconds = 0;
let timerInterval = null;
const timeDisplay = document.getElementById('time');

function updateDisplay() {
  const hours = Math.floor(totalMilliseconds / 3600000);
  const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
  const milliseconds = totalMilliseconds % 1000;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  const formattedMilliseconds = Math.floor(milliseconds / 10).toString().padStart(2, '0');

  timeDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}

function incrementTime() {
  totalMilliseconds += 10; 
}

document.getElementById('start').addEventListener('click', function() {
  if (!timerInterval) {
    timerInterval = setInterval(function() {
      incrementTime();
      updateDisplay();
    }, 10); 
  }
});
document.getElementById('stop').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById('reset').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
  totalMilliseconds = 0;
  updateDisplay();
});

updateDisplay();
