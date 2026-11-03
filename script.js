const toggles = document.querySelectorAll(".abstract-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const abstract = toggle.closest(".paper").querySelector(".abstract");
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    abstract.hidden = isOpen;
  });
});

const emailCopy = document.querySelector(".email-copy");

if (emailCopy) {
  emailCopy.addEventListener("click", async () => {
    const email = emailCopy.dataset.email;

    try {
      let copied = false;

      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(email);
          copied = true;
        } catch {
          copied = false;
        }
      }

      if (!copied) {
        const temporaryField = document.createElement("textarea");
        temporaryField.value = email;
        temporaryField.setAttribute("readonly", "");
        temporaryField.style.position = "fixed";
        temporaryField.style.opacity = "0";
        document.body.appendChild(temporaryField);
        temporaryField.select();
        copied = document.execCommand("copy");
        temporaryField.remove();
      }

      if (!copied) {
        throw new Error("Copy failed");
      }

      const feedback = emailCopy.querySelector(".copy-feedback");
      feedback.textContent = "Copied";
      emailCopy.classList.add("is-copied");
      emailCopy.setAttribute("aria-label", "Email copied");

      window.setTimeout(() => {
        feedback.textContent = "";
        emailCopy.classList.remove("is-copied");
        emailCopy.setAttribute("aria-label", "Copy email address");
      }, 1600);
    } catch {
      emailCopy.setAttribute("aria-label", "Unable to copy email address");
    }
  });
}
