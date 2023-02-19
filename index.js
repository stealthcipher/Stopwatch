// setting all buttons
let startbtn = document.getElementById('start');
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

// initilizing hour, minute, ms and second
let hour = 00;
let minute = 00;
let second = 00;
let ms = 00;

// adding event listner
// defining funtionality of buttons

startbtn.addEventListener("click", function () {
  timer = true;
  if(!timer){
    startbtn.setAttribute("disabled", true);
    stopbtn.removeAttribute("disabled");
  }
  stopwatch();
});

stopbtn.addEventListener("click", function () {
  timer = false;
  startbtn.removeAttribute("disabled");
  stopbtn.setAttribute("disabled", true);
});

resetbtn.addEventListener("click", function () {
  timer = false;
  hour = 00;
  minute = 00;
  second = 00;
  ms = 00;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ms").innerHTML = "00";
});

// Setting the count of watch

function stopwatch() {
  if (timer) {
    ms++;
  

  if (ms == 100) {
    second++;
    ms = 00;
  }

  if (second == 60) {
    minute++;
    second = 00;
  }

  if (minute == 60) {
    hour++;
    second = 00;
    minute = 00;
  }
}

  let hrString = hour;
  let minString = minute;
  let secString = second;
  let msString = ms;


  if (hour < 10) {
    hrString = "00" + minString;
  }
  if (second < 10) {
    secString = "00" + secString;
  }
  if (ms < 10) {
    msString = "00" + msString;
  }

  document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
  document.getElementById("ms").innerHTML = msString;

  setTimeout(stopwatch, 10);
}
