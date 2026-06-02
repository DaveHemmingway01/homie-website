const filterButtons = document.querySelectorAll(".filter-btn");
const spaceCards = document.querySelectorAll(".space-card");
const form = document.querySelector("#availabilityForm");
const formStatus = document.querySelector("#formStatus");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector("#mobileMenu");
const statValues = document.querySelectorAll(".stat-value");

const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    spaceCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.kind.includes(filter);
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const space = data.get("space");
  formStatus.textContent = `Thanks. Your ${space.toLowerCase()} request is ready to send in the production build.`;
  form.reset();
});

const setMenuOpen = (isOpen) => {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  siteHeader.classList.toggle("menu-open", isOpen);
};

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("click", (event) => {
  if (!siteHeader.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

const animateNumber = (element, progress) => {
  const finalValue = Number(element.dataset.final);
  const suffix = element.dataset.suffix || "";
  const currentValue = Math.round(finalValue * progress);
  element.textContent = `${currentValue.toLocaleString("en-US")}${suffix}`;
};

const animateLetters = (element, progress) => {
  const finalValue = element.dataset.final;
  const maxAlphabetIndex = alphabet.length - 1;
  element.textContent = [...finalValue]
    .map((char) => {
      if (!/[a-z]/i.test(char)) return char;
      const targetIndex = alphabet.indexOf(char.toUpperCase());
      const currentIndex = Math.min(targetIndex, Math.round(maxAlphabetIndex * progress));
      const nextChar = alphabet[currentIndex];
      return char === char.toLowerCase() ? nextChar.toLowerCase() : nextChar;
    })
    .join("");
};

const animateCode = (element, progress) => {
  const finalValue = element.dataset.final;
  element.textContent = [...finalValue]
    .map((char) => {
      if (/[0-9]/.test(char)) {
        return String(Math.min(Number(char), Math.round(9 * progress)));
      }
      if (/[a-z]/i.test(char)) {
        const targetIndex = alphabet.indexOf(char.toUpperCase());
        const currentIndex = Math.min(targetIndex, Math.round((alphabet.length - 1) * progress));
        return alphabet[currentIndex];
      }
      return char;
    })
    .join("");
};

const animateStat = (element) => {
  const duration = 1450;
  const start = performance.now();
  element.classList.add("is-animating");

  const tick = (now) => {
    const rawProgress = Math.min((now - start) / duration, 1);
    const progress = easeOutCubic(rawProgress);

    if (element.dataset.animate === "number") animateNumber(element, progress);
    if (element.dataset.animate === "letters") animateLetters(element, progress);
    if (element.dataset.animate === "code") animateCode(element, progress);

    if (rawProgress < 1) {
      requestAnimationFrame(tick);
      return;
    }

    element.textContent = element.dataset.animate === "number"
      ? `${Number(element.dataset.final).toLocaleString("en-US")}${element.dataset.suffix || ""}`
      : element.dataset.final;
    element.classList.remove("is-animating");
  };

  requestAnimationFrame(tick);
};

const statObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateStat(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.35 });

statValues.forEach((stat) => statObserver.observe(stat));
