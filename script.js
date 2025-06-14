
const messages = [
    "Pesan untuk foto besar...",
    "Pesan untuk foto kecil 1...",
    "Pesan untuk foto kecil 2...",
    "Pesan untuk foto kecil 3...",
    "Pesan untuk foto kecil 4...",
    "Pesan untuk foto kecil 5...",
    "Pesan untuk foto kecil 6...",
    "Pesan untuk foto kecil 7...",
    "Pesan untuk foto kecil 8...",
    "Pesan untuk foto kecil 9...",
  ];
  
  const videoSources = [
    'videos/video1.mp4',
    'videos/video2.mp4',
    'videos/video3.mp4',
    'videos/video4.mp4',
    'videos/video5.mp4',
  ];
  
  function showPopup(index) {
    document.getElementById("popupText").innerHTML = messages[index];
    document.getElementById("popup").style.display = "flex";
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  function showPopupVideo(idx) {
    const vid = document.getElementById("popupVideo");
    vid.src = videoSources[idx-1];
    vid.play();
    document.getElementById("videoPopup").style.display = "flex";
  }
  
  function hideVideoPopup() {
    const vid = document.getElementById("popupVideo");
    vid.pause();
    vid.currentTime = 0;
    document.getElementById("videoPopup").style.display = "none";
  }
  
  function toggleMusic() {
    const audio = document.getElementById("bg-music");
    audio.paused ? audio.play() : audio.pause();
  }

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      const message = img.getAttribute("data-message");
      alert(message);
    });
  });
  