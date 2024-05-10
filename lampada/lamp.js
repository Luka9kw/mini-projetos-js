const lampImg = document.querySelector("#lamp-image");
const btnOn = document.querySelector("#btn-on");
const btnOff = document.querySelector("#btn-off");

function lampOn() {
  lampImg.src = "img/ligada.jpg";
  console.log("on");
}

function lampOff() {
  lampImg.src = "img/desligada.jpg";
  console.log("off");
}

function lampBreak() {
  lampImg.src = "img/quebrada.jpg";
  console.log("break");
}

// Buttons
btnOn.addEventListener("click", lampOn);
btnOff.addEventListener("click", lampOff);
lampImg.addEventListener("dblclick", lampBreak);

// Mouse Hover
lampImg.addEventListener("mouseover", lampOn);
lampImg.addEventListener("mouseout", lampOff);
