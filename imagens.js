let imgEstrada;

let imgAtor;

let imgCar;

let imgCar2;

let imgCar3;

let somTrilha;
let somCollide;
let somPoint;

function preload() {
  imgEstrada = loadImage("material/estrada.png");
  imgAtor = loadImage("material/ator-1.png");
  imgCar = loadImage("material/carro-1.png");
  imgCar2 = loadImage("material/carro-2.png");
  imgCar3 = loadImage("material/carro-3.png");
  imgCars = [imgCar, imgCar2, imgCar3, imgCar, imgCar2, imgCar3];

  somTrilha = loadSound("material/sons/trilha.mp3");
  somCollide = loadSound("material/sons/colidiu.mp3");
  somPoint = loadSound("material/sons/pontos.wav");
}