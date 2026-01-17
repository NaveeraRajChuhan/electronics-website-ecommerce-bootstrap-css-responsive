const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



// UNIQUE CURSOR LOGIC
const cursorDot = document.querySelector("[data-cursor]");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline delay effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// COUNTDOWN TIMER
function updateTimer() {
    const now = new Date();
    const target = new Date();
    target.setHours(24, 0, 0, 0); // Midnight
    
    let diff = target - now;
    let h = Math.floor(diff / (1000 * 60 * 60));
    let m = Math.floor((diff / (1000 * 60)) % 60);
    let s = Math.floor((diff / 1000) % 60);
    
    document.getElementById("countdown").innerText = 
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
setInterval(updateTimer, 1000);