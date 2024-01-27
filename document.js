let text1 = document.querySelector(".seconds");
let text2 = document.querySelector(".minutes");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let reset = document.querySelector("#reset");
let source = document.querySelector('video')
let seconds = 60;
let minutes = 4;

function timer(s, m) {
  let Settimer = "";
  pause.disabled = true;
  reset.disabled = true;
  start.onclick = () => {
    reset.disabled = false;
    start.disabled = true;
    pause.disabled = false;
    Settimer = setInterval(() => {
      s--;
      if (s == 0) {
        s = 59;
        m--;
      } 
      if (m == -1) {
          clearInterval(Settimer);
        m = 0
        s = 0
        source.style.display = 'block'   
       }


      text2.innerHTML = m;
      text1.innerHTML = s;
    }, 100);
  };

  pause.onclick = () => {
    clearInterval(Settimer);
    start.disabled = false;
    reset.disabled = false;
    pause.disabled = true;
  };

  reset.onclick = () => {
    start.disabled = false;
    pause.disabled = true;

    clearInterval(Settimer);

    text2.innerHTML = 4;
    text1.innerHTML = 59;
    s = 59;
    m = 4;
  };



}
timer(seconds, minutes);
