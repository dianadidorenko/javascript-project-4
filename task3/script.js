// Создать html-страницу с progressbar и кнопкой, при нажатии
// на которую заполненность progressbar увеличивается на 5 %.

// Перший варіант

let progressItem = document.getElementById("progress__item"),
  add = document.getElementById("add");
progressItem.style.width = "0%";

add.onclick = function () {
  progressItem.style.width =
    progressItem.style.width != "100%"
      ? parseInt(progressItem.style.width) + 5 + "%"
      : 100 + "%";
};

// Другий  варіант

let progress = document.getElementById("progressbar");

progress.addEventListener("click", function () {
  document.getElementById("progress").value += 5;
});
