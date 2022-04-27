const btn = document.querySelector("button");
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
  //change background color
  document.querySelector("body").style.backgroundColor = hexColor;
}

btn.addEventListener("click", generateHex);

//generate hex colors function
