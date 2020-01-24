(function() {
  const container = document.querySelector(".js-grid-container");
  const resizeButton = document.querySelector(".js-resize-grid");
  const radioButton = document.querySelector(".js-radio-buttons");
  let colorMode = 0;

  addElement(16);

  radioButton.addEventListener("change", function(e) {
    colorMode = e.target.value;
  });

  container.addEventListener("mouseover", drawPixels);

  resizeButton.addEventListener("click", function(e) {
    const cellNumber = window.prompt("Enter a number 1-100?");
    removeGrid();
    addElement(cellNumber);
  });

  function addElement(n) {
    for (i = 0; i < n; i++) {
      const row = document.createElement("div");
      row.classList.add("grid__row", "js-grid-row", "js-grid-item");
      container.appendChild(row);
      for (j = 0; j < n; j++) {
        const cell = document.createElement("div");
        cell.classList.add("grid__cell", "js-grid-item", "js-grid-cell");
        row.appendChild(cell);
      }
    }
    addDataAttribute();
  }

  function removeGrid() {
    const grid_item = document.querySelectorAll(".js-grid-item");
    for (i = 0; i < grid_item.length; i++) {
      grid_item[i].remove();
    }
  }

  function generateRGB(element) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = "rgb(" + red + "," + green + "," + blue + ")";
    element.style.background = rgb;
  }

  function changeGradient(element) {
    let oldLightness = element.dataset.lightness;
    console.log(oldLightness);
    let newLightness = oldLightness - 10;
    console.log(newLightness);
    element.dataset.lightness = newLightness;
    const hsl = "hsl(" + 0 + "," + 0 + "%," + newLightness + "%)";
    console.log(hsl);
    element.style.background = hsl;
  }

  function drawPixels(e) {
    const el = e.target;
    if (!el.classList.contains("js-grid-cell")) {
      return;
    }
    if (colorMode === "black" || colorMode === 0) {
      el.style.background = "black";
    } else if (colorMode === "random") {
      generateRGB(el);
    } else if (colorMode === "gradient") {
      changeGradient(el);
    }
  }

  function addDataAttribute() {
    const cell = document.querySelectorAll(".js-grid-cell");
    for (i = 0; i < cell.length; i++) {
      cell[i].setAttribute("data-lightness", 100);
    }
  }
})();
