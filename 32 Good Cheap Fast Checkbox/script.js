const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

function doTheTrick(theclickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theclickedOne) {
      fast.checked = false;
    }

    if (cheap === theclickedOne) {
      good.checked = false;
    }

    if (fast === theclickedOne) {
      cheap.checked = false;
    }
  }
}

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);
