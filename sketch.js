//CARING FOR CTHULHU
//A GAME BY TRYSTAN NORD

//IMAGES

let HappyCthulhu;
let SleepyCthulhu;
let MadCthulhu;
let MurderCthulhu;
let HurtCthulhu;
let migo;
let YogDown;
let YogUp;

//BUTTONS

let HungerButton;
let PlayButton;
let StartButton;
let Continue;
let Crazy;
let trailMix;
let banana;
let jerky;
let knife;
let compass;
let stressBall;
let nextDay;
let playAgain;
let sweep;
let help;

//OBJECTS

let DayCount;
let GOO;

//VARIABLES

let day1food;
let day1play;
let DAY2;
let DAY3;
let x;
let devider = 0;

//LOAD IMAGES

function preload() {
  HappyCthulhu = loadImage('normal.png');
  SleepyCthulhu = loadImage('Sleepy.png');
  MadCthulhu = loadImage('angy.png');
  MurderCthulhu = loadImage('killing.png');
  HurtCthulhu = loadImage('hurt.png');
  migo = loadImage('migo.png');
  YogDown = loadImage('yogDown.png');
  YogUp = loadImage('yogUp.png');
}

//CTHULHU OBJECT

class cthulhu {
  constructor(hunger, play, anger, sleep) {
    this.hunger = hunger;
    this.play = play;
    this.anger = anger;
    this.sleep = sleep;
  }
  Hunger(food) {
    this.hunger += food;
  }
  Play(ball) {
    this.play += ball;
  }
  anger(mad) {
    this.anger += mad;
  }
  sleep(rest) {
    this.sleep += rest;
  }
}

//DAY COUNTER

class day {
  constructor(number) {
    this.number = number;
  }
  cycle(SR) {
    this.number += SR;

  }
}

//BUTTON FUNCTIONS

function feed() {
  DayCount.number = 20;
}

function playWith() {
  DayCount.number = 30;
}

function Cycle() {
  DayCount.cycle(1);
}

function TRAILMIX() {
  day1food = 1;
}

function BANANA() {
  day1food = 1;
}

function JERKY() {
  day1food = 2;
}

function KNIFE() {
  day1play = 1;
}

function COMPASS() {
  day1play = 1;
}

function SB() {
  day1play = 2;
}

function SWEEP() {
  DAY2 = 1;
}

function HELP() {
  DAY2 = 2;
}

function YELL() {
  DAY3 = 1;
}

function HIDE() {
  DAY3 = 2;
}

function DAY3_1(){
  x =2;
}

function DEATH() {
  DayCount.number = 10;
}

function PA() {
  DayCount.number = 1;
  day1food = 0;
  day1play = 0;
  DAY2 = 0;
  DAY3 = 0;
  x =0;
}

function SLEEPTIME() {
  DayCount.number = 5;
}

//TITLE

function title() {
  removeElements();
  fill(0);
  rect(0, 0, 1120, 630);
  fill('MediumSeaGreen');
  textSize(90);
  text('CARING FOR CTHULHU', 40, 200);
  StartButton = createButton('Play Game');
  StartButton.position(500, 400);
  StartButton.mousePressed(Cycle);
}

//PROLOGUE

function explanation() {
  removeElements();
  fill(0);
  rect(0, 0, 1120, 630);
  fill('MediumSeaGreen');
  textSize(20);
  text('While spelunking through old abandoned caves, you are drawn to a glowing green light.', 20, 120);
  text('Turning a corner you find a baby monstor sitting on the ground, looking directly into your eyes.', 20, 150);
  text('You hear a deep voice in a strange language enter your mind and morph into words you comprehend.', 20, 180);
  text('"Care for me, and I will let you and the rest of humanity live."', 20, 210);
  Continue = createButton('Agree to care for the creature');
  Continue.position(200, 400);
  Continue.mousePressed(Cycle);
  Crazy = createButton('No Way! This is insane!');
  Crazy.position(800, 400);
  Crazy.mousePressed(DEATH);
}

//DAY 1

function day1() {
  removeElements();
  push();
  scale(0.3);
  image(HappyCthulhu, 1500, 720);
  pop();
  fill(255);
  textSize(15);
  text('Cthulhu looks at you expectantly, and its stomach growls. What will you feed it from your pack?', 20, 580);
  trailMix = createButton('Trail Mix');
  trailMix.position(20, 595);
  trailMix.mousePressed(TRAILMIX);
  banana = createButton('Banana');
  banana.position(120, 595);
  banana.mousePressed(BANANA);
  jerky = createButton('Jerky');
  jerky.position(215, 595);
  jerky.mousePressed(JERKY);

  if (day1food == 1) {
    removeElements();
    push();
    scale(0.3);
    image(MadCthulhu, 1500, 720);
    pop();
    fill(0);
    rect(0, 550, 1120, 80);
    fill(255);
    textSize(15);
    text('It did not seem to like that very much. But nonetheless, it seems like it wants to play. What will you use to play with it?', 20, 580);
    knife = createButton('Knife');
    knife.position(20, 595);
    knife.mousePressed(KNIFE);
    compass = createButton('Compass');
    compass.position(110, 595);
    compass.mousePressed(COMPASS);
    stressBall = createButton('Stress Ball');
    stressBall.position(215, 595);
    stressBall.mousePressed(SB);
    if (day1play == 1) {
      madDeath();
    }
    if (day1play == 2) {
      sleepTime1();
    }
  }

  if (day1food == 2) {
    removeElements();
    fill(0);
    rect(0, 550, 1120, 80);
    fill(255);
    textSize(13);
    text('It quickly devours the jerky, and you swear the sounds of tearing flesh are a bit more gruesome than normal. After eating, it seems like it wants to play. What will you use to play with it?', 20, 580);
    knife = createButton('Knife');
    knife.position(20, 595);
    knife.mousePressed(KNIFE);
    compass = createButton('Compass');
    compass.position(110, 595);
    compass.mousePressed(COMPASS);
    stressBall = createButton('Stress Ball');
    stressBall.position(215, 595);
    stressBall.mousePressed(SB);
    if (day1play == 1) {
      sleepTime1();
    }
    if (day1play == 2) {
      sleepTime1();
    }
  }

}

//DAY 2

function day2() {
  GOO.hunger = 0;
  GOO.play =0;
  removeElements();
  push();
  scale(0.3);
  image(HurtCthulhu, 1500, 720);
  image(migo, 800, 720);
  image(migo, 2100, 720);
  image(migo, 700, 870);
  image(migo, 400, 1100);
  image(migo, 800, 1100);
  image(migo, 1300, 1200);
  image(migo, 1700, 1200);
  image(migo, 2000, 1000);
  image(migo, 2500, 1200);
  pop();
  fill(0);
  rect(0, 550, 1120, 80);
  fill(255);
  textSize(15);
  text('When you come to the cave the next day, the caveis filled with tiny alien bug carcasses and the creatue looks hurt. What do you do?', 20, 580);
  sweep = createButton('Sweep the bugs away');
  sweep.position(20, 595);
  sweep.mousePressed(SWEEP);
  help = createButton('Try and help the creature');
  help.position(190, 595);
  help.mousePressed(HELP);
  if (DAY2 == 2) {
    removeElements();
    push();
    scale(0.3);
    image(MadCthulhu, 1500, 720);
    pop();
    fill(0);
    rect(0, 550, 1120, 80);
    fill(255);
    textSize(15);
    text('As you try and inspect the wounds, you accidentally trip on a bug and sink a hand deep into a cut. The creature wakes up in a fit of rage.', 20, 580);
    Continue = createButton('Continue');
    Continue.position(20, 595);
    Continue.mousePressed(DEATH);
  }
  if (DAY2 == 1) {
    removeElements();
    background(40);
    noStroke();
    fill('LightGrey');
    rect(0, 395, 1120, 315);
    fill('SaddleBrown');
    ellipse(20, 300, 280, 750);
    ellipse(160, 240, 280, 450);
    ellipse(240, 100, 280, 450);
    ellipse(1100, 300, 280, 750);
    ellipse(960, 240, 280, 450);
    ellipse(880, 100, 280, 450);
    ellipse(width / 2, 20, 1100, 150);
    fill(0);
    rect(0, 550, 1120, 80);
    push();
    scale(0.3);
    image(HappyCthulhu, 1500, 720);
    pop();
    fill(0);
    rect(0, 550, 1120, 80);
    fill(255);
    textSize(15);
    text('The creature wakes up as you finish piling the corpses next to the wall. It looks at you expectantly.', 20, 580);
    HungerButton = createButton('feed');
    HungerButton.position(1060, 560);
    HungerButton.mousePressed(feed);
    PlayButton = createButton('play');
    PlayButton.mousePressed(playWith);
    PlayButton.position(1060, 600);
  }
}

//DAY 3
function day3() {
  devider = 1;
  removeElements();
  background(40);
  noStroke();
  fill('LightGrey');
  rect(0, 395, 1120, 315);
  fill('SaddleBrown');
  ellipse(20, 300, 280, 750);
  ellipse(160, 240, 280, 450);
  ellipse(240, 100, 280, 450);
  ellipse(1100, 300, 280, 750);
  ellipse(960, 240, 280, 450);
  ellipse(880, 100, 280, 450);
  ellipse(width / 2, 20, 1100, 150);
  fill(0);
  rect(0, 550, 1120, 80);
  push();
  scale(0.3);
  image(SleepyCthulhu, 1500, 720);
  pop();
  push();
  scale(0.35);
  image(YogDown, 1150, 20);
  pop();
  fill(0);
  rect(0, 550, 1120, 80);
  fill(255);
  textSize(15);
  text('As you come in the next day, a giant multi-eyed mosntrosity is hovering over the sleeping creature.', 20, 580);
  sweep = createButton('Try and get the creature to wake up');
  sweep.position(20, 595);
  sweep.mousePressed(YELL);
  help = createButton('Hide and wait for the mostor to go away');
  help.position(290, 595);
  help.mousePressed(HIDE);
  if (DAY3 == 1) {
    removeElements();
    background(40);
    noStroke();
    fill('LightGrey');
    rect(0, 395, 1120, 315);
    fill('SaddleBrown');
    ellipse(20, 300, 280, 750);
    ellipse(160, 240, 280, 450);
    ellipse(240, 100, 280, 450);
    ellipse(1100, 300, 280, 750);
    ellipse(960, 240, 280, 450);
    ellipse(880, 100, 280, 450);
    ellipse(width / 2, 20, 1100, 150);
    fill(0);
    push();
    scale(0.3);
    image(MadCthulhu, 1500, 720);
    pop();
    push();
    scale(0.35);
    image(YogUp, 1150, 20);
    pop();
    fill(0);
    rect(0, 550, 1120, 80);
    fill(255);
    textSize(15);
    text('The creature wakes up in a fit of rage, mad that you woke it up when its grandfather was giving it such nice dreams.', 20, 580);
    Continue = createButton('Continue');
    Continue.position(20, 595);
    Continue.mousePressed(DEATH);
  }
  if (DAY3 == 2) {
    removeElements();
     push();
    scale(0.35);
    image(YogUp, 1150, 20);
    pop();
    fill(0);
    rect(0, 550, 1120, 80);
    fill(255);
    textSize(15);
    text('The monster notices you hiding behind a rock, but slowly fades into the shadows in the ceiling and disappears.', 20, 580);
    Continue = createButton('Continue');
    Continue.position(20, 595);
    Continue.mousePressed(DAY3_1);
    if(x == 2){
      removeElements();
    background(40);
    noStroke();
    fill('LightGrey');
    rect(0, 395, 1120, 315);
    fill('SaddleBrown');
    ellipse(20, 300, 280, 750);
    ellipse(160, 240, 280, 450);
    ellipse(240, 100, 280, 450);
    ellipse(1100, 300, 280, 750);
    ellipse(960, 240, 280, 450);
    ellipse(880, 100, 280, 450);
    ellipse(width / 2, 20, 1100, 150);
    fill(0);
    rect(0, 550, 1120, 80);
    push();
    scale(0.3);
    image(HappyCthulhu, 1500, 720);
    pop();
    fill(0);
    rect(0, 550, 1120, 80);
    fill(255);
    textSize(15);
    text('The creature wakes up with a smile on its face. It looks at you expectantly.', 20, 580);
    HungerButton = createButton('feed');
    HungerButton.position(1060, 560);
    HungerButton.mousePressed(feed);
    PlayButton = createButton('play');
    PlayButton.mousePressed(playWith);
    PlayButton.position(1060, 600);
    }
  }
}

//END
function end(){
  removeElements();
  fill(0);
  rect(0, 0, 1120, 630);
  fill('MediumSeaGreen');
  textSize(20);
  text('As you come to the cave the next day, the tiny creature is gone. ', 20, 120);
  text('In its place is a chest filled with gold coins engraved with strange relics and covered in a grey goo.', 20, 150);
  text('YOU WON THE GAME!', 20, 210);
  playAgain = createButton('Play Again');
  playAgain.position(500, 450);
  playAgain.mousePressed(PA)
}

//CTHULHU STATES

function madDeath() {
  removeElements();
  push();
  scale(0.6);
  image(MurderCthulhu, 450, 34);
  pop();
  fill(0);
  rect(0, 550, 1120, 80);
  fill(255);
  textSize(15);
  text('The anger grows, and the form of the creature begins to warp and expand. The presence of the being becomes unbearable, and your mind starts to spiral.', 20, 580);
  text('As you fall to the ground, you watch the enraged Cthulhu fly out of the cave.', 20, 605);
  playAgain = createButton('Play Again');
  playAgain.position(1000, 600);
  playAgain.mousePressed(PA);
}

function sleepTime1() {
  background(40);
  noStroke();
  fill('LightGrey');
  rect(0, 395, 1120, 315);
  fill('SaddleBrown');
  ellipse(20, 300, 280, 750);
  ellipse(160, 240, 280, 450);
  ellipse(240, 100, 280, 450);
  ellipse(1100, 300, 280, 750);
  ellipse(960, 240, 280, 450);
  ellipse(880, 100, 280, 450);
  ellipse(width / 2, 20, 1100, 150);
  fill(0);
  rect(0, 550, 1120, 80);
  removeElements();
  push();
  scale(0.3);
  image(SleepyCthulhu, 1500, 720);
  pop();
  fill(255);
  textSize(15);
  text('After a long day, the creature starts to doze off and eventually falls asleep, leaving you free to go back home for the night and come back tomorrow.', 20, 580);
  nextDay = createButton('Next Day');
  nextDay.position(1030, 560);
  nextDay.mousePressed(Cycle);
  if (devider == 1)
    {
      DayCount.number =7;
    }
}

function feedingTime() {
  push();
  scale(0.3);
  image(HappyCthulhu, 1500, 720);
  pop();
  fill(0);
  rect(0, 550, 1120, 80);
  fill(255);
  textSize(15);
  text('As you try and give it more jerky, the creature walks over to the pile of alien bodies and eats a few of them.', 20, 580);
  GOO.Hunger(1);
  if (GOO.hunger > 0 && GOO.play > 0) {
    removeElements();
    Continue = createButton('Continue');
    Continue.position(1030, 560);
    Continue.mousePressed(SLEEPTIME);
  }
}

function playTime() {
  push();
  scale(0.3);
  image(HappyCthulhu, 1500, 720);
  pop();
  fill(0);
  rect(0, 550, 1120, 80);
  fill(255);
  textSize(15);
  text('You pull out your stress ball and the creature takes some time to toss it around using its mind.', 20, 580);
  GOO.Play(1);
  if (GOO.hunger > 0 && GOO.play > 0) {
    removeElements();
    Continue = createButton('Continue');
    Continue.position(1030, 560);
    Continue.mousePressed(SLEEPTIME);
  }
}


//SETUP

function setup() {
  createCanvas(1120, 630);
  DayCount = new day(1);
  GOO = new cthulhu(0, 0, 0, 0);
  HungerButton = createButton('feed');
  PlayButton = createButton('play');
  HungerButton.mousePressed(feed);
  HungerButton.position(1070, 560);
  PlayButton.mousePressed(playWith);
  PlayButton.position(1070, 600);
}

//VISUAL ENGINE

function draw() {

  //CAVE

  background(40);
  noStroke();
  fill('LightGrey');
  rect(0, 395, 1120, 315);
  fill('SaddleBrown');
  ellipse(20, 300, 280, 750);
  ellipse(160, 240, 280, 450);
  ellipse(240, 100, 280, 450);
  ellipse(1100, 300, 280, 750);
  ellipse(960, 240, 280, 450);
  ellipse(880, 100, 280, 450);
  ellipse(width / 2, 20, 1100, 150);
  fill(0);
  rect(0, 550, 1120, 80);

  //DAYS

  if (DayCount.number == 1) {
    title();
  }
  if (DayCount.number == 2) {
    explanation();
  }
  if (DayCount.number == 3) {
    day1();
  }
  if (DayCount.number == 4) {
    day2();
  }
  if (DayCount.number == 5) {
    sleepTime1();
  }
  if (DayCount.number == 6) {
    day3();
  }
  if (DayCount.number == 7) {
    end();
  }
  if (DayCount.number == 10) {
    madDeath();
  }
  if (DayCount.number == 20) {
    feedingTime();
  }
  if (DayCount.number == 30) {
    playTime();
  }
}