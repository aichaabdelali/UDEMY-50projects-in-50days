const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});

//.parentNode enable to access the parent of the element without having to grab it from the DOM
