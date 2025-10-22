const checkbox = document.getElementById("toggle");
const html = document.querySelector("html");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    html.classList.add("dark");
    html.classList.remove("light");
  } else {
    html.classList.add("light");
    html.classList.remove("dark");
  }
});
