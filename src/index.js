import ('./style.css');
const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone');


dayjs.extend(timezone);

//DOM
const timeZoneText = document.querySelector("#timezone");
const timeText = document.querySelector("#time");
const dateText = document.querySelector("#date");

function actualTime(){
    hours = dayjs().hour();
    if (hours.toString().length < 2){
        hours = '0' + hours;
    }
    minutes = dayjs().minute();
    if (minutes.toString().length < 2){
        minutes = '0' + minutes;
    }
    seconds = dayjs().second();
    if (seconds.toString().length < 2){
        seconds = '0' + seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
}

function actualDate(){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${daysOfWeek[dayjs().day()]}, ${dayjs().date()} ${monthsOfYear[dayjs().month()]} ${dayjs().year()}`;
}

userTimeZone = dayjs.tz.guess();

timeZoneText.textContent = userTimeZone;
function setValues(){
    timeText.textContent = actualTime();
    dateText.textContent = actualDate();
}
setInterval(setValues, 1000);
