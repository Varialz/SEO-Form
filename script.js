const scene = document.querySelector(".scene");

window.addEventListener("pointermove", (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;
  scene.style.setProperty("--mx", `${x * 22}px`);
  scene.style.setProperty("--my", `${y * 22}px`);
}, { passive: true });

// Replace this with your published Google Form URL.
const GOOGLE_FORM_URL = "https://forms.gle/5RxEKX65cDubq9kB6";
document.querySelectorAll("[data-form-link]").forEach((link) => {\n  link.href = GOOGLE_FORM_URL;\n});
