const container = document.getElementById("container");
const colors = ["#dbcfc3", "#d3e3d6", "#efc4b9", "#fdc96", "#dac2cf"];
const SQUARES = 500;

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const addColor = (element) => {
  const color = randomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
};

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => addColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}
