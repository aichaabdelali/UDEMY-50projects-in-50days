const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

pickRandom = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

highlightTag = (tag) => {
  tag.classList.add("highlight");
};

unHighlightTag = (tag) => {
  tag.classList.remove("highlight");
};

randomPick = () => {
  const times = Math.floor(Math.random() * 100);
  const interval = setInterval(() => {
    const randomTag = pickRandom();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandom();
      highlightTag(randomTag);
    });
  }, times * 100);
};

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomPick();
  }
});
