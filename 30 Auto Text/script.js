const textEl = document.getElementById("text");
const sppedEl = document.getElementById("speed");
const text = "I'll find a way";
let idx = 1;
let speed = 300 / sppedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

sppedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

writeText();
