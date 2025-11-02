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

var cnt = 1;
function profileChange() {
  var profile = document.getElementById("profile");
  var profileprf = document.getElementById("profileprf");
  if(cnt%2==1)
    {
      profile.src="../img/lucidprf.png";
      profileprf.src="../img/lucid.png";
    }
  else
    {
      profile.src="../img/lucid.png";
      profileprf.src="../img/lucidprf.png";
   }
  cnt++;
}
