const container = document.querySelector(".js-grid-container");
addElement();
const gridItem = document.querySelector(".js-grid-item");
container.addEventListener("mouseover", function(e) {
  const el = e.target;
  el.classList.add("highlight");
});

function addElement() {
  for (i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("outline", "grid__item", "js-grid-item");
    container.appendChild(newDiv);
  }
}
