function toggleMenu() {
  const navbar = document.querySelector(".nav-container .navbar");
  const hmbgr = document.querySelector(".nav-container .hmbgr");
  const closeHmbgr = document.querySelector(".nav-container .close-hmbgr");

  navbar.classList.toggle("active");
  hmbgr.style.display = navbar.classList.contains("active") ? "none" : "block";
  closeHmbgr.style.display = navbar.classList.contains("active")
    ? "block"
    : "none";
}

function handleResize() {
  const hmbgr = document.querySelector(".nav-container .hmbgr");
  const closeHmbgr = document.querySelector(".nav-container .close-hmbgr");

  if (window.innerWidth > 768) {
    hmbgr.style.display = "none";
    closeHmbgr.style.display = "none";
  } else {
    const isActive = document
      .querySelector(".nav-container .navbar")
      .classList.contains("active");
    hmbgr.style.display = isActive ? "none" : "block";
    closeHmbgr.style.display = isActive ? "block" : "none";
  }
}

// Initial and resize check
handleResize();
window.addEventListener("resize", handleResize);
