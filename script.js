const leftContainer = document.querySelector('.left_container');
const image = new Image();
image.src = './image.avif'; // Set the same image as the background

image.onload = function() {
  const aspectRatio = image.width / image.height;
  leftContainer.style.width = `${window.innerHeight * aspectRatio}px`; // Adjust width dynamically
};

// Update width on window resize
window.addEventListener('resize', () => {
  if (image.complete) {
    leftContainer.style.width = `${window.innerHeight * (image.width / image.height)}px`;
  }
});