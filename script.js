var timer = 60;
var score = 0;
var hitnum = 0;

function scorerun() {
  score += 10;
  document.querySelector("#scorern").textContent = score;
}

function makebubble() {
  var clutter = "";

  for (var i = 0; i <= 185; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }

  document.querySelector("#lpanel").innerHTML = clutter;
}

function runtimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#lpanel").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function newhit() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitvar").textContent = hitnum;
}

document.querySelector("#lpanel").addEventListener("click", function (e) {
  var clickednum = Number(e.target.textContent);
  if (clickednum === hitnum) {
    scorerun();
    makebubble();
    newhit();
  }
});

newhit();
runtimer();
makebubble();
