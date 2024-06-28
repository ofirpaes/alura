let yAtor = 885;
let xAtor = 165;
let collide = false;
let myPoints = 0;

function viewAtor() {
    image(imgAtor, xAtor, yAtor, 50, 50);
  }

function movAtor() {
    if (keyIsDown(UP_ARROW)) {
      yAtor -= 3;
    } if (keyIsDown(DOWN_ARROW)) {
      if (limY()) {
        yAtor += 3;
      }
    } if (keyIsDown(LEFT_ARROW)) {
      xAtor -=3;
    } if (keyIsDown(RIGHT_ARROW)) {
      xAtor +=3;
    }
  }

function viewCollide() {
  for (let i = 0; i < imgCars.length; i++) {
    collide = collideRectCircle(xCars[i], yCars[i], compCar, altCar, xAtor, yAtor, 33)
    if (collide) {
      retAtor();
      somCollide.play();
      if (myPoints > 0){ 
        myPoints -= 1;
      }
    }
  }
}

function retAtor() {
  yAtor = 885;
}

function viewPoints() {
  textSize(50);
  textAlign(CENTER);
  text(myPoints, width / 5, 60);
  fill(color(255, 255, 255));
}

function marcaPoints() {
  if (yAtor < 20){
    myPoints += 1;
    somPoint.play();
    retAtor();
  }
}

function pointsMaior() {
  myPoints > 0;
}

function limY() {
  return yAtor < 885;
}


