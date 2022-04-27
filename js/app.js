const btn = document.querySelector("button");
//METHOD 1
const colors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#9400D3",
  "rgba(255, 0, 0, 0.5)",
  "rgba(255, 127, 0, 0.5)",
  "rgba(255, 255, 0, 0.5)",
  "rgba(0, 255, 0, 0.5)",
  "rgba(0, 0, 255, 0.5)",
];

//color changer function
function changeColor() {
  const color = document.querySelector(".color");

  let body = document.querySelector("body");
  let random = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[random];
  color.innerHTML = colors[random];
}

//generate hex colors function
function generateHex() {
  //generate random hex color
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    if (random < 10) {
      random = random.toString();
      hexColor += random;
    } else {
      random = random.toString(16);
      hexColor += random;
    }
  }

  //display hex color
  const color = document.querySelector(".color");
  color.innerHTML = hexColor;
  //change background color
  document.querySelector("body").style.backgroundColor = hexColor;
}

btn.addEventListener("click", generateHex);

//generate hex colors function

// btn.addEventListener("click", changeColor);
