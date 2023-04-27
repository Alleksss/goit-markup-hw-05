var modal = document.getElementById("myModal");
modal.classList.remove("modal-open");
modal.classList.add("modal-close");
var modal = document.getElementById("myModal");
modal.addEventListener("animationend", function () {
  modal.classList.remove("modal-close");
});
