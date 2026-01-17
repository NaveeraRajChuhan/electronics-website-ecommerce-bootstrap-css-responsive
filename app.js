const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



// Footer Reveal Animation
const nvrFooterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.nvr-footer-content > div').forEach(col => {
    col.style.opacity = "0";
    col.style.transform = "translateY(30px)";
    col.style.transition = "all 0.6s ease-out";
    nvrFooterObserver.observe(col);
});