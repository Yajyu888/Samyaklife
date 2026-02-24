const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
const searchBox = document.getElementById("searchBox");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

searchBox.addEventListener("keyup", () => {
  const text = searchBox.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(text)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
