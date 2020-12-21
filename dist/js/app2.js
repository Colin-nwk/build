let dashboardBody = document.querySelector(".dashboard-body"),
  sidebarControl = document.querySelector(".sidebar-control"),
  linkColor = document.querySelectorAll(".sidebar-nav-link");

sidebarControl.addEventListener("click", () => {
  dashboardBody.classList.toggle("sidebar-expand");
});

/*===== LINK ACTIVE  =====*/
function colorLink() {
  if (linkColor) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));
