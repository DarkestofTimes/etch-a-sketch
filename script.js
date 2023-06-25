const input = document.querySelector("#send");
const canvas = document.querySelector(".canvas");
const reset = document.querySelector("#reset");

const getInput = () => {
  const num = document.querySelector("#input");
  const value = parseInt(num.value);
  if (!value || value === "") {
    return;
  } else if (value <= 100) {
    return value;
  } else {
    return;
  }
};

const createDivs = () => {
  let i = 0;
  let input = getInput();
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

const createFirstDivs = (value) => {
  let i = 0;
  let input = value;
  let multInput = input * input;
  let aspect = 100 / input;
  while (i < multInput) {
    let newDiv = document.createElement("div");
    newDiv.className = "pixel";
    newDiv.style.flexBasis = `${aspect}%`;
    canvas.appendChild(newDiv);
    i++;
  }
};

const pixels = document.querySelectorAll(".pixel");

const changeColor = (ev) => {
  if (ev.target.className === "pixel") {
    ev.target.style.backgroundColor = "blue";
    ev.stopPropagation();
  }
};

document.addEventListener("mousedown", (ev) => {
  if (ev.target.className === "pixel") {
    changeColor(ev);
  } else {
    return;
  }
});

document.addEventListener("mouseover", (ev) => {
  if (ev.target.className === "pixel") {
    if (ev.buttons == 1) {
      ev.target.style.backgroundColor = "blue";
    }
  }
});

input.addEventListener("click", createDivs);

window.addEventListener("DOMContentLoaded", createFirstDivs(16));

//each separate click should increment value to change between cases in switch statement
//while lmb is held, increment does not happen, and color stays the same, until next click
