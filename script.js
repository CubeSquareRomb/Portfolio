let angle = 0;

function animateGradient() {
  angle += 0.2;
  if (angle > 360) {
    angle = 0;
  }

  document.documentElement.style.setProperty("--angle", `${angle}deg`);
}

setInterval(animateGradient, 10);

window.addEventListener("scroll", function () {
    let container = document.querySelector("nav");
    let scrollY = window.scrollY;
    let maxScroll = 100;

    let opacity = Math.max(0, 1 - scrollY / maxScroll);
    container.style.opacity = opacity;
  });