const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

const changeImg = () => {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
};

const run = () => {
  idx++;

  changeImg();
};

let interval = setInterval(run, 2000);

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

rightBtn.addEventListener("click", () => {
  idx++;

  changeImg();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;

  changeImg();
  resetInterval();
});
