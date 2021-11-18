const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//check MDN doc

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 5);
}

function dragEnd() {
  this.className = "fill";
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
