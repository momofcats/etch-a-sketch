(function() {
  const container = document.querySelector(".js-grid-container");
  const resizeButton = document.querySelector(".js-resize-grid");
  const radioButton = document.querySelector(".js-radio-buttons");
  let colorMode = "black";
  const defaultGrid = 16;

  buildGrid(16);

  radioButton.addEventListener("change", function(e) {
    colorMode = e.target.value;
  });

  container.addEventListener("mouseover", drawPixels);

  resizeButton.addEventListener("click", function(e) {
    const cellNumber = window.prompt("Enter a number 1-100?");
    if (cellNumber <= 0 || cellNumber > 100) {
      alert("Wrong number, please, try again!");
      cellNumber = defaultGrid;
    }
    container.innerHTML = "";
    buildGrid(cellNumber);
  });

  function buildGrid(n) {
    for (i = 0; i < n; i++) {
      const row = document.createElement("div");
      row.classList.add("grid__row", "js-grid-row", "js-grid-item");
      for (j = 0; j < n; j++) {
        const cell = document.createElement("div");
        cell.classList.add("grid__cell", "js-grid-item", "js-grid-cell");
        row.appendChild(cell);
      }
      container.appendChild(row);
    }
  }

  function generateRGB(element) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = `rgb(${red},${green},${blue})`;
    element.style.background = rgb;
  }

  function changeGradient(element) {
    let oldLightness = element.dataset.lightness;
    if (oldLightness === undefined) {
      oldLightness = 100;
    }
    let newLightness = oldLightness - 10;
    element.dataset.lightness = newLightness;
    const hsl = `hsl(0,0%,${newLightness}%)`;
    element.style.background = hsl;
  }

  function drawPixels(e) {
    const el = e.target;
    if (!el.classList.contains("js-grid-cell")) {
      return;
    }
    if (colorMode === "black") {
      el.style.background = "black";
    } else if (colorMode === "random") {
      generateRGB(el);
    } else if (colorMode === "gradient") {
      changeGradient(el);
    }
  }
})();
