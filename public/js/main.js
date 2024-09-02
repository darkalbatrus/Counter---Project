//!-- Elements --//
const counterText = document.querySelector(".counter-text");
const counterButtons = document.querySelectorAll(".btn");

//!-- Initial Action --//
let count = 0;
counterText.textContent = count;

//!-- ForEach Loop --//
counterButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const currentButton = event.target.dataset.btn;
    counterFunc(currentButton);
  });
});

//!-- Counter Function --//
const counterFunc = (currentButton) => {
  if (currentButton === "decrease") {
    count--;
  } else if (currentButton === "increase") {
    count++;
  } else {
    count = 0;
  }

  //?-- Update Count Text --//
  counterText.textContent = count;
};
