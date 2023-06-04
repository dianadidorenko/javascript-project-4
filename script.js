// Создать html-страницу со списком книг. При щелчке на книгу, 
// цвет фона должен меняться на оранжевый. Учтите, что при 
// повторном щелчке на другую книгу, предыдущей – необходимо 
// возвращать прежний цвет. Использовать делегирование событий.

let bookItems = document.getElementById("book-items"),
    selectedLi;
  
bookItems.onclick = function (e) {
  let target = event.target;
  console.log(e);

  if (target.tagName != "LI") return;

  highlight(target);
};

function highlight(li) {
  if (selectedLi) {
    selectedLi.classList.remove("highlight");
  }
  selectedLi = li;
  selectedLi.classList.add("highlight");
}

let viewNotification = document.querySelector(".notification");

button.addEventListener("click", function () {
  viewNotification.style.display = "block";
  bookItems.addEventListener("click", function () {
    viewNotification.style.display = "none";
  });
});
