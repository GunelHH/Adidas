let scroll = document.querySelector("#navfixed");
document.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scroll.style.display = "none";
  } else {
    scroll.style.display = "block";
  }
});
