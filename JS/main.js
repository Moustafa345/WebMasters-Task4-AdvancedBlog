const backToTopButton = document.getElementById("back-to-top");

// Show/hide the back-to-top button based on scroll position
window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY ? "block" : "none";
});

// Smooth scroll to top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
