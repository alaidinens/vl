const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// distance (px) at which the button starts escaping
const TRIGGER_DISTANCE = 80;

document.addEventListener("mousemove", (e) => {
  const btnRect = noBtn.getBoundingClientRect();

  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  const distance = Math.hypot(
    e.clientX - btnCenterX,
    e.clientY - btnCenterY
  );

  if (distance < TRIGGER_DISTANCE) {
    moveButton();
  }
});

function moveButton() {
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
