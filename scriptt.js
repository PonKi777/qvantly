// Reveal-анимация
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  for (let el of reveals) {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      el.classList.add("visible");
    }
  }
}
window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// Tooltip
document.addEventListener("mousemove", (e) => {
  const tooltip = document.querySelector(".tooltip");
  if (tooltip) {
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = (e.pageY - 30) + "px";
  }
});

document.querySelectorAll("[data-tooltip]").forEach(el => {
  el.addEventListener("mouseenter", () => {
    const tip = document.createElement("div");
    tip.className = "tooltip";
    tip.textContent = el.getAttribute("data-tooltip");
    document.body.appendChild(tip);
  });
  el.addEventListener("mouseleave", () => {
    document.querySelector(".tooltip")?.remove();
  });
});

// Модалка
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.style.display = "flex";
});
modal.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

// След мыши
const trail = document.getElementById("trail");
document.addEventListener("mousemove", (e) => {
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  if (toggleButton && sidebar) {
    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});
