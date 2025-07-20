document.addEventListener("DOMContentLoaded", function () {
  // Obsługa formularza kontaktowego
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const name = form.querySelector("input[name='name']");
      const email = form.querySelector("input[name='email']");
      const message = form.querySelector("textarea[name='message']");

      let isValid = true;

      if (!name.value.trim()) {
        alert("Proszę wpisać imię.");
        isValid = false;
      }

      if (!validateEmail(email.value.trim())) {
        alert("Proszę wpisać poprawny adres e-mail.");
        isValid = false;
      }

      if (!message.value.trim()) {
        alert("Proszę wpisać treść wiadomości.");
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault(); // Zatrzymaj wysyłkę formularza
      }
    });
  }

  function validateEmail(email) {
    // Prosty regex do walidacji e-maila
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Obsługa przyszłego hamburgera (opcjonalne)
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav ul");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
});

function toggleNav() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('show');
  }

  window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if(window.scrollY > 50) { // możesz zmienić na inną wartość pixeli
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scroll-to-top logic
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



