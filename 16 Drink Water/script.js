const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remaind = document.getElementById("remainder");

updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const total = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / total) * 330}px`;
    percentage.innerText = `${(fullCups / total) * 100}%`;
  }

  if (fullCups === total) {
    remaind.style.visibility = "hidden";
    remaind.style.height = 0;
  } else {
    remaind.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

updateBigCup();

fillCup = (idx) => {
  //add extra condition for the last cup to resolve the null error
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
};

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => fillCup(idx));
});
