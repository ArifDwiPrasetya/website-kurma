export function setupSmoothScroll() {
  const navLinks = document.querySelectorAll("[data-scroll-to]");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Mencegah perilaku default jika berupa tag <a>

      const targetId = link.getAttribute("data-scroll-to");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
