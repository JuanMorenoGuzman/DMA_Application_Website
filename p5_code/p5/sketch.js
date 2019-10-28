
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


//var image1_up, image2_over,snd1;
// var duration;
// var  slideWidth = 500;
let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;

function preload() {

  // snd1 = loadSound("sound/16_Ethno_Circus.mp3");
  sound = loadSound('sound/02_Ethno_Circus.mp3');
  sound2 = loadSound('sound/01_Ordinary_Zone.mp3');
  sound3 = loadSound('sound/03_Wrapped_in_Black.mp3');
  sound4 = loadSound('sound/04_A_New_Day.mp3');
  sound5 = loadSound('sound/05_Ska_Cha_Cha.mp3');
  sound6 = loadSound('sound/06_Raisin_ Me_Up.mp3');
  img = loadImage('assets/sonic_cover.jpg');
  img2 = loadImage('assets/background.jpg');
  img3 = loadImage('assets/blaze_01.png');
  img4 = loadImage('assets/blaze_02.png');
  img5 = loadImage('assets/sonic.png');
  img6 = loadImage('assets/sonic_ogr.png');
  img7 = loadImage('assets/blaze_ogr.jpg');
  img8 = loadImage('assets/sonic_cover2.png');
  img9 = loadImage('assets/blaze_and_sonic.png');
  img10 = loadImage('assets/final_boss_sr.jpg');

}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(1000, 700);
  //  console.log(hell);
     mgr = new SceneManager();
     //masterVolume(.05);


     //ghosty = createSprite(0, 0);
     //ghosty.addAnimation("normal", "assets/blaze_pose0001.png",  "assets/blaze_pose0003.png");
     //ghosty.addAnimation("stand", "assets/blaze_action0001.png",  "assets/blaze_action0007.png");

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.showNextScene();




}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();

}

function togglePlay()
{
   // pass the mousePressed message into the SceneManager
  //mgr.togglePlay();
}


function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene1 );
            sound.stop();
            sound2.stop();
            sound3.stop();
            sound4.stop();
            sound5.stop();
            sound6.stop();
            break;
        case '2':
            mgr.showScene( scene2 );
            sound.stop();
            sound2.stop();
            sound3.stop();
            sound4.stop();
            sound5.stop();
            sound6.stop();
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

// function togglePlay() {
//   if (sound.isPlaying()) {
//     sound.pause();
//   } else {
//     sound.loop();
//   }
// }
