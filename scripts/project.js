document.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("playBgm");

  btn.addEventListener("click", () => {
    if (bgm.paused) {
      bgm.volume = 1.0;
      bgm.play();
      btn.textContent = "♫ ON";
      btn.classList.add("playing");
    } else {
      bgm.pause();
      btn.textContent = "♫ OFF";
      btn.classList.remove("playing");
    }
  });
});