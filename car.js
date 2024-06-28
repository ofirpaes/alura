let xCars = [950, 950, 950, 950, 950, 950];
let yCars = [100, 240, 360, 500, 630, 750];
let velCars = [3, 4.5, 7.5, 3.5, 6, 8];
let compCar = 130;
let altCar = 85;

function viewCar() {
  for (let i = 0; i < imgCars.length; i++) {
  image(imgCars[i], xCars[i], yCars[i], compCar, altCar);
  }
}
  
function movCar() { 
  for (let i = 0; i < imgCars.length; i++) {
    xCars[i] -= velCars[i];
  }
}

function posInicial() {
  for (let i = 0; i < imgCars.length; i++) {
    if (limTela(xCars[i])) {
    xCars[i] = 950;
    }
  }
}

function limTela(xCars) {
  return xCars < -300;
}

function movAtor() {
    if (keyIsDown(UP_ARROW)) {
      yAtor -= 3;
    } if (keyIsDown(DOWN_ARROW)) {
      yAtor += 3;
    }
  }