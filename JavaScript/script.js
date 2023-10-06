const btnOpen = document.getElementById("open");
const modal = document.getElementById("modalContainer");

function openModal() {
  modal.classList.toggle("displayNone");
}

btnOpen.addEventListener("click", openModal);

// function showTxt() {
//   const toto = document.getElementById("toto");
//   toto.classList.toggle("displayNone");
// }
// open.addEventListener("click", showTxt);

// close.addEventListener("click", None);

// function None() {
//   const toto = document.getElementById("toto");
//   toto.classList.remove("displayNone");
// }
