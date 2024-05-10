const lampImg = document.querySelector("#lamp-image");
const btnOn = document.querySelector("#btn-on");
const btnOff = document.querySelector("#btn-off");

function lampSwitch(lampStatus) {
  if (lampStatus === "off") {
    lampImg.src = "img/desligada.jpg";
  } else if (lampStatus === "on") {
    lampImg.src = "img/ligada.jpg";
  } else if (lampStatus === "break") {
    lampImg.src = "img/quebrada.jpg";
  }
}

// Buttons
btnOn.addEventListener("click", () => lampSwitch("on"));
btnOff.addEventListener("click", () => lampSwitch("off"));
lampImg.addEventListener("dblclick", () => lampSwitch("break"));

// Mouse Hover
lampImg.addEventListener("mouseover", () => lampSwitch("on"));
lampImg.addEventListener("mouseout", () => lampSwitch("off"));
