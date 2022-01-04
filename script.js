let a;
let date;
let time;
let hours;
let minutes;
let seconds;
const options = { weekday:'long',year:'numeric',month:'long',day:'numeric'};
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined,options);
    hours = a.getHours();
    hours = hours > 9 ? hours : '0'+hours;
    minutes = a.getMinutes();
    minutes = minutes > 9 ? minutes : '0'+minutes;
    seconds = a.getSeconds();
    seconds = seconds > 9 ? seconds : '0'+seconds;
    time =  hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').innerHTML = time + "<br>on " + date ;
}, 1000);