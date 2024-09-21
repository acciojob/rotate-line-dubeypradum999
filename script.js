function rotateLine() {
  var line = document.getElementById("line");
  var angle = 0;

  setInterval(function() {
    angle += 2;
    line.style.transform = "rotate(" + angle + "deg)";
  }, 20);
}

rotateLine();
