function myFunction(x) {
  x.classList.toggle("change");
}

function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("open").style.visibility = "hidden";
  document.getElementById("navSection").style.height = "40%";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("open").style.visibility = "visible";
  document.getElementById("navSection").style.height = "auto";
  document.body.style.overflow = "scroll";
}
