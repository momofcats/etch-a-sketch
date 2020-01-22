const container = document.querySelector(".js-grid-container");
addElement();
function addElement() {
  for (i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("border");
    container.appendChild(newDiv);
  }
}
