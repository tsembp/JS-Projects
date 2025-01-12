let secondsElapsed = 0; // initially 0 seconds
let interval = null;
const time = document.getElementById("time");

function padStart(value){
    return String(value).padStart(2, '0'); // pad with 0 if not length of 2
}

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function startClock(){
    if(interval) resetClock();
    interval = setInterval(function(){
        secondsElapsed++;
        setTime();
    }, 1000)
}

function stopClock(){
    clearInterval(interval);
}

function resetClock(){
    stopClock();
    secondsElapsed = 0;
    setTime();
}