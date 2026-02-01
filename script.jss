const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  message.textContent = "Yayyy 💖 I knew it!!! 🥰";
});
