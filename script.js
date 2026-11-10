const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const navigationLinks = document.querySelectorAll(".nav-link");
const heroRole = document.querySelector(".hero-role span");

if (heroRole) {
  const roles = ["Full-Stack Developer", "Graphic Designer"];
  let currentRole = 0;

  window.setInterval(() => {
    heroRole.classList.add("is-changing");
    window.setTimeout(() => {
      currentRole = (currentRole + 1) % roles.length;
      heroRole.textContent = roles[currentRole];
      heroRole.classList.remove("is-changing");
    }, 300);
  }, 3000);
}

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
    navigationLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});