let currentAudio = null;

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const stopButton = document.querySelector(".stop");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const soundId = button.getAttribute("data-sound");
      const audio = document.getElementById(soundId);

      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      currentAudio = audio;
      currentAudio.play();
    });
  });

  stopButton.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  });
});
