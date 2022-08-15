AOS.init();

const btnModal = document.querySelector("#modal-toggle");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#close");
const sendBtn = document.querySelector("#send");
const cancel = document.querySelector("#btn-close");

btnModal.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

cancel.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
