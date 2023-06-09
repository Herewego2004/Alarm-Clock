const timing = document.getElementById("time");
const alarmSound = new Audio("alarmSound.mp3");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const setbutton = document.getElementById("setalarm");
const dropdowns = document.getElementsByClassName('dropdowns');



setInterval(() => {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hr < 10) {
        if (min < 10) {
            if (sec < 10) {
                timing.innerText = `Current Time: 0${hr}:0${min}:0${sec}`;
            }
            else {
                timing.innerText = `Current Time: 0${hr}:0${min}:${sec}`;
            }
        } else {
            if (sec < 10) {
                timing.innerText = `Current Time: 0${hr}:${min}:0${sec}`;
            } else {
                timing.innerText = `Current Time: 0${hr}:${min}:${sec}`;
            }
        }
    } else {
        if (min < 10) {
            if (sec < 10) {
                timing.innerText = `Current Time: ${hr}:0${min}:0${sec}`;
            }
            else {
                timing.innerText = `Current Time: ${hr}:0${min}:${sec}`;
            }
        } else {
            if (sec < 10) {
                timing.innerText = `Current Time: ${hr}:${min}:0${sec}`;
            } else {
                timing.innerText = `Current Time: ${hr}:${min}:${sec}`;
            }
        }
    }
}, 1000);
setbutton.addEventListener("click", () => {
    if (
        hour.value === "Hour" ||
        minute.value === "Minute" ||
        second.value === "Second"
    ) {
        alert("Invalid Time set.");
    } else {
        btn.innerHTML += ` <button type="button" class="btn btn-danger" id="resetalarm" onclick="reset()">Reset Alarm</button>`
        let settime = `Current Time: ${hour.value}:${minute.value}:${second.value}`;
        setInterval(() => {
            if (timing.innerText == settime) {
                alarmSound.play();
            }  
        }, 20)
    }
});


        function reset(){
            location.reload(); 
        }
        
        //   let time = new Date();
        //   let hr = time.getHours();
        //   let min = time.getMinutes();
        //   let sec = time.getSeconds();
        //     setTimeout(() => {
        //       alarmSound.play();
        //     }, ((hour.value - hr) * 3600 + (minute.value - min) * 60 + (second.value - sec)) 
        // * 1000);
