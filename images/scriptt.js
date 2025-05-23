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

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");

if (modal && openModalButton) {
  openModalButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  const closeModalButton = modal.querySelector(".close");
  if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

const trail = document.getElementById("trail");

document.addEventListener("mousemove", (e) => {
  if (trail) {
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("sidebarTrigger");
  const sidebar = document.getElementById("sidebar");

  if (toggleButton && sidebar) {
    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});
