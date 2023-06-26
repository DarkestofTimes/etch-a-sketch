const input = document.querySelector("#send");
const canvas = document.querySelector(".canvas");
const reset = document.querySelector("#reset");
const eraseBtn = document.querySelector("#erase");
const colorSelector = document.querySelector("#color");
const rangeSelector = document.querySelector("#input");
const rangeValue = document.querySelector("#rangeValue");
let color = "black";
let eraser = false;

rangeSelector.addEventListener("input", () => {
  rangeValue.textContent = rangeSelector.value;
});

const createDivs = () => {
  let i = 0;
  let input = rangeSelector.value;
  let multInput = input * input;
  let aspect = 100 / input;
  while (canvas.childElementCount) {
    canvas.lastElementChild.remove();
  }
  while (i < multInput) {
    let newDiv = document.createElement("div");
    newDiv.className = "pixel";
    newDiv.style.flexBasis = `${aspect}%`;
    canvas.appendChild(newDiv);
    i++;
  }
};

const pixels = document.querySelectorAll(".pixel");

const erase = (ev) => {
  if (ev.target.className === "pixel") {
    ev.target.style.backgroundColor = "white";
    ev.stopPropagation();
  }
};

const changeColor = (ev) => {
  if (ev.target.className === "pixel") {
    ev.target.style.backgroundColor = color;
    ev.stopPropagation();
  }
};

document.addEventListener("mousedown", (ev) => {
  if (ev.target.className === "pixel") {
    if (eraser === true) {
      erase(ev);
    } else {
      changeColor(ev);
    }
  }
});

document.addEventListener("mouseover", (ev) => {
  if (ev.target.className === "pixel") {
    if (ev.buttons == 1) {
      if (eraser === true) {
        erase(ev);
      } else {
        changeColor(ev);
      }
    }
  }
});

colorSelector.addEventListener("input", (ev) => {
  color = colorSelector.value;
});

eraseBtn.addEventListener("click", () => {
  if (eraser === false) {
    eraser = true;
    eraseBtn.textContent = "pen";
  } else {
    eraser = false;
    eraseBtn.textContent = "eraser";
  }
});

input.addEventListener("click", createDivs);

window.addEventListener("DOMContentLoaded", () => {
  rangeValue.textContent = rangeSelector.value;
  createDivs();
});

//each separate click should increment value to change between cases in switch statement
//while lmb is held, increment does not happen, and color stays the same, until next click
