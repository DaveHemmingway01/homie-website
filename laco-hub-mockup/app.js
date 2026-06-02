const filterButtons = document.querySelectorAll(".filter-btn");
const spaceCards = document.querySelectorAll(".space-card");
const form = document.querySelector("#availabilityForm");
const formStatus = document.querySelector("#formStatus");

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
