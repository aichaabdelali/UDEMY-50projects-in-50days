const sounds = ["applause", "explosion", "heaven", "swoosh", "victory"];

const stopSound = () => {
  sounds.forEach((sound) => {
    const effect = document.getElementById(sound);
    effect.pause();
    effect.currentTime = 0;
  });
};

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
