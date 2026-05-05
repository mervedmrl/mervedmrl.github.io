const toggles = document.querySelectorAll(".abstract-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const abstract = toggle.closest(".paper").querySelector(".abstract");
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    abstract.hidden = isOpen;
  });
});
