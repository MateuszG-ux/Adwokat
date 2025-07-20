document.addEventListener("DOMContentLoaded", function () {
  // Walidacja formularza kontaktowego
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
        e.preventDefault();
      }
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

   // Obsługa burgera (toggle na <ul>)
  const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
  }

  // AOS animacje
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  // Sticky nagłówek
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll-to-top
  const scrollBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});