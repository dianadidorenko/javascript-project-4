// Создать html-страницу с div, который занимает всю ширину
// и высоту экрана.При движении мышкой внутри этого div, выводить
// текущие координаты мышки.При клике кнопкой мыши туда же, выводить,
// какой именно кнопкой был совершен клик(правой или левой).

let mainDiv = document.getElementById("main__block");

mainDiv.onmousemove = function (e) {
  let targetX = e.clientX,
    targetY = e.clientY;
  // console.log(e.clientX);
  // console.log(e.clientY);
  pointX.innerText = "X = " + targetX;
  pointY.innerText = "Y = " + targetY;
};

mainDiv.onmousedown = function (e) {
  let whichButton = (whichButtonMouse.innerText =
    "Was clicked by mouse button " + e.which);
  
  switch (e.which) {
    case 1:
      whichButton
      break;
    case 2:
      whichButton;
      break;
    case 3:
      whichButton;
      break;
  }
};

mainDiv.oncontextmenu = function () {
  return false;
};
