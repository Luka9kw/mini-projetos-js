const lampImg = document.querySelector("#lamp-image");
const btnOn = document.querySelector("#btn-on");
const btnOff = document.querySelector("#btn-off");

function lampOn() {
  lampImg.src = "img/ligada.jpg";
}

function lampOff() {
  lampImg.src = "img/desligada.jpg";
}

function lampBreak() {
  lampImg.src = "img/quebrada.jpg";
}

// Buttons
btnOn.addEventListener("click", lampOn);
btnOff.addEventListener("click", lampOff);
lampImg.addEventListener("dblclick", lampBreak);

// Mouse Hover
lampImg.addEventListener("mouseover", lampOn);
lampImg.addEventListener("mouseout", lampOff);
