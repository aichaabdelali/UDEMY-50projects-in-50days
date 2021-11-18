const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["🤪", "🥰", "😎", "🤬", "🤕", "💩", " 💪"];

showNotification = () => {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.innerText = messages[Math.floor(Math.random() * messages.length)];

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

button.addEventListener("click", () => showNotification());
