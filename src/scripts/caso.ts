const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const videos = document.querySelectorAll<HTMLVideoElement>("video[data-caso-video]");
if (videos.length === 0) {
  // Nada que hacer en un caso de imagen.
} else {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const video = entry.target;
      if (!(video instanceof HTMLVideoElement)) continue;
      if (!entry.isIntersecting && !video.paused) video.pause();
    }
  });

  for (const video of videos) {
    video.autoplay = false;
    video.removeAttribute("autoplay");
    video.preload = "none";
    if (reduced) video.pause();
    observer.observe(video);
  }
}
