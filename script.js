let currentAudio = null;
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const stopBtn = document.querySelector(".stop");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const soundName = button.textContent.trim();
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio("sounds/" + soundName + ".mp3");
      currentAudio.play();
    });
  });

  stopBtn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  });
});
