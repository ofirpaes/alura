function setup() {
  createCanvas(950, 950);
  //somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  viewAtor();
  viewCar();
  movCar();
  movAtor();
  posInicial();
  viewCollide();
  viewPoints();
  marcaPoints();
}

