const leftContainer = document.querySelector(".left_container");
const image = new Image();
image.src = "./image.avif";

image.onload = function(){
  const aspectRatio = image.width / image.height;
  leftContainer.style.width = `${window.innerHeight * aspectRatio}px`;
}

window.addEventListener("resize", () => {
  if (image.complete) {
    leftContainer.style.width = `${window.innerHeight * (image.width / image.height)}px`;
  }
})