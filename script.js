AOS.init({ disable: "mobile" });

$(".navbar-toggler").click(function () {
  $("#navmenu").toggle();
});
$("#navmenu").click(function () {
  $("#navmenu").hide();
});

function clearFields() {
  document.querySelector("#input").value = "";
  document.querySelector("#textarea").value = "";
}

document.querySelector("#send").addEventListener("click", function () {
  clearFields();
});
