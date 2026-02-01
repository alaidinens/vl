const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const TRIGGER_DISTANCE = 80;

document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);

  if (distance < TRIGGER_DISTANCE) {
    moveNoButton();
  }
});

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", () => {
  window.location.href = "thanks.html";
});
