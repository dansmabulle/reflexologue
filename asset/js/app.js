function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // Fermer le menu mobile quand on clique sur un lien
  const navLinks = document.querySelectorAll("#navLinks a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("active");
    });
  });

  // Activer le lien courant
  const current = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(a => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });
});
