// setting all buttons
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

// initilizing hour, minute, ms and second
let hour = 00;
let minute = 00;
let second = 00;
let ms = 00;
let timer = false;

// adding event listner
// defining funtionality of buttons

startbtn.addEventListener("click", function () {
  startbtn.setAttribute("disabled", true);
  stopbtn.removeAttribute("disabled");
  timer = true;
  stopwatch();
});

stopbtn.addEventListener("click", function () {
  startbtn.removeAttribute("disabled");
  stopbtn.setAttribute("disabled", true);
  timer = false;
});

resetbtn.addEventListener("click", function () {

  startbtn.removeAttribute("disabled");
  stopbtn.removeAttribute("disabled");

  timer = false;
  hour = 00;
  minute = 00;
  second = 00;
  ms = 00;
  updateDisplay();
});


// function for  Display update 
function updateDisplay() {
  let hrString = String(hour);
  let minString = String(minute);
  let secString = String(second);
  let msString = String(ms);

  if (hour < 10) {
    hrString = "0" + hrString;
  }
  if (minute < 10) {
    minString = "0" + minString;
  }
  if (second < 10) {
    secString = "0" + secString;
  }
  

  document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
}

// function/logic for stopwatch function
function stopwatch() {
  if (timer) {
    ms++;
    if (ms == 100) {
      second++;
      ms = 00;
      if (second == 60) {
        minute++;
        second = 00;
        if (minute == 60) {
          hour++;
          minute = 00;
        }
      }
      updateDisplay();
    }
    setTimeout(stopwatch, 10);
  }
}
