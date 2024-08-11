//Desktop to Mobile Img switching
function updateImages() {
  const imgIntroDekstop = document.getElementById("image-intro-desktop");

  const screenWidth = window.innerWidth;

  if (screenWidth <= 425) {
    imgIntroDekstop.src = "images/image-intro-mobile.jpg";
  } else {
    imgIntroDekstop.src = "images/image-intro-desktop.jpg";
  }
}

window.onload = updateImages;

window.onresize = updateImages;
