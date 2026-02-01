const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const btnRect = noBtn.getBoundingClientRect();
  const padding = 20;

  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "happy.html";
});
