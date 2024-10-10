const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const milliSecondsLabel = document.getElementById('milliseconds');

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

const lapList = document.getElementById('lap-list');



// stopwatch variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer(){
//   let interval = setInterval(updateTimer);
 interval = setInterval(updateTimer, 10);
 startBtn.disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    addToLapList()
    resetTimerData();
    startBtn.disabled = false;

}
function pauseTimer(){
    clearInterval(interval);
    startBtn.disabled = false;

}
function resetTimer(){
 clearInterval(interval);

 resetTimerData();
 startBtn.disabled = false;

}

function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
        seconds = 0;  
        minutes++
        }
    }
     displayTimer()
}

function displayTimer(){
 minutesLabel.textContent = padTime(minutes);
 secondsLabel.textContent = padTime(seconds);
 milliSecondsLabel.textContent = padTime(milliseconds);

}

function padTime(time){
    return time.toString().padStart(2,'0');
}
function resetTimerData(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}
function addToLapList(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li');
     listItem.innerText = `Lap ${lapList.childElementCount +1}:  ${lapTime}`

    lapList.appendChild(listItem);
}

