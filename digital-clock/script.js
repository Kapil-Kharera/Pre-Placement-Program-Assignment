
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateTime() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    hoursElement.textContent = currentHours;
    minutesElement.textContent = currentMinutes;
    secondsElement.textContent = currentSeconds;
}

// setTimeout(() => { updateTime(); }, 1000);
setInterval( updateTime, 1000);



