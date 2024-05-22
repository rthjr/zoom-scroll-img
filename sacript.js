const image = document.getElementById('zoom-image');
let scale = 1;
const scaleStep = 0.1;
const minScale = 1;
const maxScale = 3;

image.addEventListener('wheel', (event) => {
  if (event.target === image) {
    // Prevent scrolling if within zoom limits
    if ((event.deltaY > 0 && scale < maxScale) || (event.deltaY < 0 && scale > minScale)) {
      event.preventDefault();

      // Update the scale based on scroll direction
      if (event.deltaY > 0) {
        scale = Math.min(scale + scaleStep, maxScale);  // Zoom in
      } else {
        scale = Math.max(scale - scaleStep, minScale);  // Zoom out
      }

      // Apply the scale transform
      image.style.transform = `scale(${scale})`;
    }
  }
});
