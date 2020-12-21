let container = document.getElementById("container"),
  modalBtn = document.querySelector(".modal-btn"),
  modalBg = document.querySelector(".modal-bg"),
  modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", () => {
  modalBg.classList.add("modal-active");
});
modalClose.addEventListener("click", () => {
  modalBg.classList.remove("modal-active");
});
/* ===== LOGIN CONTROL======== */
toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);
