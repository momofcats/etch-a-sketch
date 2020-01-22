const container = document.querySelector(".js-grid-container");
addElement();
function addElement() {
  for (i = 0; i < 255; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("border", "grid__item");
    container.appendChild(newDiv);
  }
}
