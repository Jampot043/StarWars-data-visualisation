let data;
let currentPlanet = 0;

function preload() {
  data = loadJSON("js/starwars.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background("#000B1F")
  drawplanet();
  info();
}

function drawplanet() {

  fill('white');
  for (let i = 0; i < data.planeet.length; i++) {

    let planetx = data.planeet[i].orbital_period;
    let planety = data.planeet[i].rotation_period;
    let planetsize = data.planeet[i].diameter;

    let planx = map(planetx, 0, 5300, 0, width)
    let plany = map(planety, 0, 40, 0, height)
    let plansize = map(planetsize, 0, 120000, 0, 350)

    let planetcolor = data.planeet[i].planet;

if(currentPlanet == i){
stroke('white');
strokeWeight(4);
fill(planetcolor)
ellipse(planx, plany, plansize);
}else{
  noStroke();
    fill(planetcolor)
    ellipse(planx, plany, plansize);
}


}


    
  

}

function info(){
noFill();
stroke('white');
strokeWeight(2);
rect(10,10,800,220);

noStroke();
fill('yellow')
textSize(40)
text(data.name, 50,70)

fill('white')
textSize(20)
text('Name planet: ' + data.planeet[currentPlanet].name, 50, 100)
text('Climate: ' + data.planeet[currentPlanet].climate, 50, 130)
text('Gravity: ' + data.planeet[currentPlanet].gravity, 50, 160)
text('Terrain: ' + data.planeet[currentPlanet].terrain, 50, 190)

if(data.planeet[currentPlanet].society == true) {


push();
    translate(650, 120);
textAlign(CENTER, CENTER)
textSize(15)
text('Population', 0,-10)
text(data.planeet[currentPlanet].population, 0,10)


    for (let i = 0; i < 360; i++) {

        stroke('white');
        strokeWeight(2);
        noFill();

        beginShape();
        let pop = data.planeet[currentPlanet].population;
        let r = map(pop, 1000, 1000000000000, 60, 100)
        let x = r * cos(radians(i));
        let y = r * sin(radians(i));
        vertex(x, y);
        endShape(CLOSE);
    }
    pop();
  }


}

function mousePressed(){
    //Planeet 0 --> Alderaan
    let planetx0 = data.planeet[0].orbital_period;
    let planety0 = data.planeet[0].rotation_period;
    let planetsize0 = data.planeet[0].diameter;

    let planx0 = map(planetx0, 0, 5300, 0, width)
    let plany0 = map(planety0, 0, 40, 0, height)
    let plansize0 = map(planetsize0, 0, 120000, 0, 350)

    if(mouseX > planx0-plansize0/2 && mouseX < planx0+plansize0/2 && mouseY > plany0-plansize0/2 && mouseY < plany0+plansize0/2){
      currentPlanet=0;
    }

    //Planeet 1 --> Yavin IV
    let planetx1 = data.planeet[1].orbital_period;
    let planety1 = data.planeet[1].rotation_period;
    let planetsize1 = data.planeet[1].diameter;

    let planx1 = map(planetx1, 0, 5300, 0, width)
    let plany1 = map(planety1, 0, 40, 0, height)
    let plansize1 = map(planetsize1, 0, 120000, 0, 350)

    if(mouseX > planx1-plansize1/2 && mouseX < planx1+plansize1/2 && mouseY > plany1-plansize1/2 && mouseY < plany1+plansize1/2){
      currentPlanet=1;
    }

    //Planeet 2 --> Hoth
    let planetx2 = data.planeet[2].orbital_period;
    let planety2 = data.planeet[2].rotation_period;
    let planetsize2 = data.planeet[2].diameter;

    let planx2 = map(planetx2, 0, 5300, 0, width)
    let plany2 = map(planety2, 0, 40, 0, height)
    let plansize2 = map(planetsize2, 0, 120000, 0, 350)

    if(mouseX > planx2-plansize2/2 && mouseX < planx2+plansize2/2 && mouseY > plany2-plansize2/2 && mouseY < plany2+plansize2/2){
      currentPlanet=2;
    }

    //Planeet 3 --> Dagobah
    let planetx3 = data.planeet[3].orbital_period;
    let planety3 = data.planeet[3].rotation_period;
    let planetsize3 = data.planeet[3].diameter;

    let planx3 = map(planetx3, 0, 5300, 0, width)
    let plany3 = map(planety3, 0, 40, 0, height)
    let plansize3 = map(planetsize3, 0, 120000, 0, 350)

    if(mouseX > planx3-plansize3/2 && mouseX < planx3+plansize3/2 && mouseY > plany3-plansize3/2 && mouseY < plany3+plansize3/2){
      currentPlanet=3;
    }

    //Planeet 4 --> Bespin
    let planetx4 = data.planeet[4].orbital_period;
    let planety4 = data.planeet[4].rotation_period;
    let planetsize4 = data.planeet[4].diameter;

    let planx4 = map(planetx4, 0, 5300, 0, width)
    let plany4 = map(planety4, 0, 40, 0, height)
    let plansize4 = map(planetsize4, 0, 120000, 0, 350)

    if(mouseX > planx4-plansize4/2 && mouseX < planx4+plansize4/2 && mouseY > plany4-plansize4/2 && mouseY < plany4+plansize4/2){
      currentPlanet=4;
    }

    //Planeet 5 --> Endor
    let planetx5 = data.planeet[5].orbital_period;
    let planety5 = data.planeet[5].rotation_period;
    let planetsize5 = data.planeet[5].diameter;

    let planx5 = map(planetx5, 0, 5300, 0, width)
    let plany5 = map(planety5, 0, 40, 0, height)
    let plansize5 = map(planetsize5, 0, 120000, 0, 350)

    if(mouseX > planx5-plansize5/2 && mouseX < planx5+plansize5/2 && mouseY > plany5-plansize5/2 && mouseY < plany5+plansize5/2){
      currentPlanet=5;
    }

    //Planeet 6 --> Naboo
    let planetx6 = data.planeet[6].orbital_period;
    let planety6 = data.planeet[6].rotation_period;
    let planetsize6 = data.planeet[6].diameter;

    let planx6 = map(planetx6, 0, 5300, 0, width)
    let plany6 = map(planety6, 0, 40, 0, height)
    let plansize6 = map(planetsize6, 0, 120000, 0, 350)

    if(mouseX > planx6-plansize6/2 && mouseX < planx6+plansize6/2 && mouseY > plany6-plansize6/2 && mouseY < plany6+plansize6/2){
      currentPlanet=6;
    }

    //Planeet 7 --> Coruscant
    let planetx7 = data.planeet[7].orbital_period;
    let planety7 = data.planeet[7].rotation_period;
    let planetsize7 = data.planeet[7].diameter;

    let planx7 = map(planetx7, 0, 5300, 0, width)
    let plany7 = map(planety7, 0, 40, 0, height)
    let plansize7 = map(planetsize7, 0, 120000, 0, 350)

    if(mouseX > planx7-plansize7/2 && mouseX < planx7+plansize7/2 && mouseY > plany7-plansize7/2 && mouseY < plany7+plansize7/2){
      currentPlanet=7;
    }

    //Planeet 8 --> Kamino
    let planetx8 = data.planeet[8].orbital_period;
    let planety8 = data.planeet[8].rotation_period;
    let planetsize8 = data.planeet[8].diameter;

    let planx8 = map(planetx8, 0, 5300, 0, width)
    let plany8 = map(planety8, 0, 40, 0, height)
    let plansize8 = map(planetsize8, 0, 120000, 0, 350)

    if(mouseX > planx8-plansize8/2 && mouseX < planx8+plansize8/2 && mouseY > plany8-plansize8/2 && mouseY < plany8+plansize8/2){
      currentPlanet=8;
    }

    //Planeet 9 --> Geonosis
    let planetx9 = data.planeet[9].orbital_period;
    let planety9 = data.planeet[9].rotation_period;
    let planetsize9 = data.planeet[9].diameter;

    let planx9 = map(planetx9, 0, 5300, 0, width)
    let plany9 = map(planety9, 0, 40, 0, height)
    let plansize9 = map(planetsize9, 0, 120000, 0, 350)

    if(mouseX > planx9-plansize9/2 && mouseX < planx9+plansize9/2 && mouseY > plany9-plansize9/2 && mouseY < plany9+plansize9/2){
      currentPlanet=9;
    }

    //Planeet 10 --> Utapau
    let planetx10 = data.planeet[10].orbital_period;
    let planety10 = data.planeet[10].rotation_period;
    let planetsize10 = data.planeet[10].diameter;

    let planx10 = map(planetx10, 0, 5300, 0, width)
    let plany10 = map(planety10, 0, 40, 0, height)
    let plansize10 = map(planetsize10, 0, 120000, 0, 350)

    if(mouseX > planx10-plansize10/2 && mouseX < planx10+plansize10/2 && mouseY > plany10-plansize10/2 && mouseY < plany10+plansize10/2){
      currentPlanet=10;
    }

    //Planeet 11 --> Mustafar
    let planetx11 = data.planeet[11].orbital_period;
    let planety11 = data.planeet[11].rotation_period;
    let planetsize11 = data.planeet[11].diameter;

    let planx11 = map(planetx11, 0, 5300, 0, width)
    let plany11 = map(planety11, 0, 40, 0, height)
    let plansize11 = map(planetsize11, 0, 120000, 0, 350)

    if(mouseX > planx11-plansize11/2 && mouseX < planx11+plansize11/2 && mouseY > plany11-plansize11/2 && mouseY < plany11+plansize11/2){
      currentPlanet=11;
    }

    //Planeet 12 --> Kashyyyk
    let planetx12 = data.planeet[12].orbital_period;
    let planety12 = data.planeet[12].rotation_period;
    let planetsize12 = data.planeet[12].diameter;

    let planx12 = map(planetx12, 0, 5300, 0, width)
    let plany12 = map(planety12, 0, 40, 0, height)
    let plansize12 = map(planetsize12, 0, 120000, 0, 350)

    if(mouseX > planx12-plansize12/2 && mouseX < planx12+plansize12/2 && mouseY > plany12-plansize12/2 && mouseY < plany12+plansize12/2){
      currentPlanet=12;
    }


  console.log(currentPlanet)
}