const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

// FILTER FUNCTIONALITY
// ==========================
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ==========================
// LIGHTBOX FUNCTIONALITY
// ==========================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

const images = document.querySelectorAll(".gallery-item img");

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add("active");
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// Close
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Close when clicking background
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// Next
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

// Prev
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// ==========================
// KEYBOARD SUPPORT (PRO)
// ==========================
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }

  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }

  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});
