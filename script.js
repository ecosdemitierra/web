let navbar = document.getElementById("navbar");

window.onscroll = function() {
  if (window.scrollY > 100) {
    navbar.style.top = "0";
    navbar.style.backgroundColor = "rgba(0,0,0,0.9)";
  } else {
    navbar.style.top = "-80px";
    navbar.style.backgroundColor = "rgba(0,0,0,0.7)";
  }
};

// Animación de tarjetas en Encuestas
const cards = document.querySelectorAll(".card");
if (cards) {
  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
}

