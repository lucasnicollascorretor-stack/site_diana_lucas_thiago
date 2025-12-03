// MENU MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// BOTÃO DE VOLTAR AO TOPO
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// FORMULÁRIO (simulação)
const form = document.querySelector(".contact-form");
const feedback = document.querySelector(".form-feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  feedback.textContent = "Mensagem enviada com sucesso!";
  form.reset();
  setTimeout(() => (feedback.textContent = ""), 3000);
});
