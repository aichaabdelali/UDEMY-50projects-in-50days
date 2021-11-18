const jokeEl = document.getElementById("jokes");
const btn = document.getElementById("btn");

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerText = data.joke;

  //fetch("https://icanhazdadjoke.com", config)
  //.then((res) => res.json())
  //.then((data) => (jokeEl.innerText = data.joke));
}

generateJoke();

btn.addEventListener("click", generateJoke);
