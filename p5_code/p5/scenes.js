
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";


// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// 1 /////////////////
function scene1()  {
    var textX;
    var textY;
    var lox= 0;
// scene1.setup
    this.setup = function() {

      console.log("We are at setup for scene1");

      //createCanvas(600, 500);
      //image(img, 0, 0, width, height);
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        image(img, 0, 0, width, height);
        image(img3, 50, 400, 300, 300);
        textX = 10;
        textY = 0;
        //background(102, 41, 232);
        textAlign(CENTER);
        textStyle(BOLDITALIC);
        fill(255);
        textSize(42);
        text("SONIC RUSH MUSIC PLAYER\n\n", 300,200);
        textSize(32);
        text("-- Click anywhere to Begin --\n\n", 300,300);
    }

    this.keyPressed = function() {
        //fill(0,255,0);
        //text(keyCode, textX, textY += 10);

       // if ( !snd1.isPlaying() ) {
       //    snd1.play();
       //  }


        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

///////////////////////  2  ////////////////////////

function scene2()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

    hell = "bye";



  

  this.setup = function() {
    //image(img2, 0, 0, width, height);
      console.log("We are at setup for scene2");
     //ghosty.position.x++;

  }

  this.enter = function()
  {
      console.log("We are at entering scene2");
      textX = 10;
      textY = 0;
        console.log(hell);



  }




    this.draw = function()
    {
        //background(157, 83, 232);
        image(img2, 0, 0, width, height);
        image(img4, 0, 200, 300, 500);
        image(img5, 700, 200, 300, 500);

        textAlign(CENTER);
        textStyle(BOLDITALIC);
        fill(255);
        textSize(42);
        text("INSTRUCTIONS\n\n", width / 2,100);
        fill(0);
        textSize(18);
        text("-- Hover over the music button/option to see its music type \n\n", 540,150);
        text("-- Music options consist of upbeat, moderate and calm.\n\n", 510,180);
        text("-- Click on your desired music option and enjoy.\n\n", width / 2,210);
        text("-- Click on it again to Pause.\n\n", 405,240);
        text("-- Press 1 on your keyboard to return to the title screen\n\n", 515,270);

        fill(0, 255, 101);
        textSize(24);
        text("Click anywhere to begin Listening!\n\n", 500,450);


        // drawSprites();
        // var r = sin( frameCount * 1.00 );
    }

    this.mousePressed = function()
    {
      //console.log("woot");
      // ghost.changeAnimation("stand");
        this.sceneManager.showNextScene();
    }



}






////////////////////////////// 3 /////////////////

function scene3() {

//   this.preload = function() {
//
//     // snd1 = loadSound("sound/16_Ethno_Circus.mp3");
//     sound = loadSound('sound/16_Ethno_Circus.mp3');
// }

var canvas;
var click1;
var click2;
var click3;
var click4;
var click5;
var click6;
var amp;

  this.setup = function(){
    var cnv = createCanvas(1000, 700);

    //cnv.mouseClicked(togglePlay);

    angleMode(DEGREES);

    fft = new p5.FFT(0.9,64);
    fft2 = new p5.FFT();

    w = width/64;
    amp = new p5.Amplitude();

    sound.amp(0.2);
    sound2.amp(0.1);
    sound3.amp(0.2);
    sound4.amp(0.2);
    sound5.amp(0.2);
    sound6.amp(0.2);

    click1 = new Clickable();
    click1.locate(880, 630);
    //This function is ran when the clickable is hovered but not pressed.
    click1.onHover = function(){
    this.color = "#f46542";
    this.textColor = "#FFFFFF";
    this.text = "Upbeat!";
    }
    //This function is ran when the clickable is NOT hovered.
    click1.onOutside = function(){
    this.color = "#EEEEEE";
    this.text = "ETHNO CIRCUS";
    this.textColor = "#000000";
    }
    //This function is ran when the clickable is pressed.
    click1.onPress = function(){
      if ( sound2.isPlaying() ) {
             sound2.stop();
           }

           if ( sound3.isPlaying() ) {
                  sound3.stop();
                }

                if (sound4.isPlaying()) {
                  sound4.stop();
                }

                if (sound5.isPlaying()) {
                  sound5.stop();
                }

                if (sound6.isPlaying()) {
                  sound6.stop();
                }

           if ( sound.isPlaying() ) {

              sound.pause();
              //sound3.pause();

         } else {
          sound.loop();
         }
    }

    click2 = new Clickable();
    click2.locate(770, 630);
    //This function is ran when the clickable is hovered but not pressed.
    click2.onHover = function(){
    this.color = "#efacf9";
    this.textColor = "#FFFFFF";
    this.text = "~ Calm ~";
    }
    //This function is ran when the clickable is NOT hovered.
    click2.onOutside = function(){
    this.color = "#EEEEEE";
    this.text = "ORDINARY ZONE";
    this.textColor = "#000000";
    }
    //This function is ran when the clickable is pressed.
    click2.onPress = function(){
      if ( sound.isPlaying() ) {
             sound.stop();
           }

           if ( sound3.isPlaying() ) {
                  sound3.stop();
                }

                if (sound4.isPlaying()) {
                  sound4.stop();
                }

                if (sound5.isPlaying()) {
                  sound5.stop();
                }

                if (sound6.isPlaying()) {
                  sound6.stop();
                }

           if ( sound2.isPlaying() ) {

              sound2.pause();
              //sound3.pause();

         } else {
          sound2.loop();
         }
    }


    click3 = new Clickable();
    click3.locate(660, 630);
    //This function is ran when the clickable is hovered but not pressed.
    click3.onHover = function(){
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
    this.text = "Moderate";
    }
    //This function is ran when the clickable is NOT hovered.
    click3.onOutside = function(){
    this.color = "#EEEEEE";
    this.text = "WRAPPED IN BLACK";
    this.textColor = "#000000";
    }
    //This function is ran when the clickable is pressed.
    click3.onPress = function(){

      if ( sound.isPlaying() ) {
             sound.stop();
           }

           if ( sound2.isPlaying() ) {
                  sound2.stop();
                }

                if (sound4.isPlaying()) {
                  sound4.stop();
                }

                if (sound5.isPlaying()) {
                  sound5.stop();
                }

                if (sound6.isPlaying()) {
                  sound6.stop();
                }

           if ( sound3.isPlaying() ) {

              sound3.pause();
              //sound3.pause();

         } else {
          sound3.loop();
         }



    }

    click4 = new Clickable();
    click4.locate(660, 570);
    //This function is ran when the clickable is hovered but not pressed.
    click4.onHover = function(){
    this.color = "#f46542";
    this.textColor = "#FFFFFF";
    this.text = "Upbeat!";
    }
    //This function is ran when the clickable is NOT hovered.
    click4.onOutside = function(){
    this.color = "#EEEEEE";
    this.text = "A NEW DAY";
    this.textColor = "#000000";
    }
    //This function is ran when the clickable is pressed.
    click4.onPress = function(){

      if (sound2.isPlaying()) {
    sound2.stop();
  }

  if (sound3.isPlaying()) {
    sound3.stop();
  }

  if (sound.isPlaying()) {
    sound.stop();
  }

  if (sound5.isPlaying()) {
    sound5.stop();
  }

  if (sound6.isPlaying()) {
    sound6.stop();
  }

  if ( sound4.isPlaying() ) {

              sound4.pause();
              //sound3.pause();

         } else {
          sound4.loop();
         }
    }

    click5 = new Clickable();
    click5.locate(770, 570);
    //This function is ran when the clickable is hovered but not pressed.
    click5.onHover = function(){
    this.color = "#ffbc21";
    this.textColor = "#FFFFFF";
    this.text = "Upbeat!";
    }
    //This function is ran when the clickable is NOT hovered.
    click5.onOutside = function(){
    this.color = "#EEEEEE";
    this.text = "SKA CHA CHA";
    this.textColor = "#000000";
    }
    //This function is ran when the clickable is pressed.
    click5.onPress = function(){

      if (sound2.isPlaying()) {
    sound2.stop();
    }

    if (sound3.isPlaying()) {
    sound3.stop();
    }

    if (sound.isPlaying()) {
    sound.stop();
    }

    if (sound4.isPlaying()) {
    sound4.stop();
    }

    if (sound6.isPlaying()) {
    sound6.stop();
    }

    if ( sound5.isPlaying() ) {

              sound5.pause();
              //sound3.pause();

         } else {
          sound5.loop();
         }
    }

    click6 = new Clickable();
    click6.locate(880, 570);
    //This function is ran when the clickable is hovered but not pressed.
    click6.onHover = function(){
    this.color = "#f48642";
    this.textColor = "#FFFFFF";
    this.text = "Calm/Upbeat";
    }
    //This function is ran when the clickable is NOT hovered.
    click6.onOutside = function(){
    this.color = "#EEEEEE";
    this.text = "RAISIN' ME UP";
    this.textColor = "#000000";
    }
    //This function is ran when the clickable is pressed.
    click6.onPress = function(){

      if (sound2.isPlaying()) {
    sound2.stop();
    }

    if (sound3.isPlaying()) {
    sound3.stop();
    }

    if (sound.isPlaying()) {
    sound.stop();
    }

    if (sound4.isPlaying()) {
    sound4.stop();
    }

    if (sound5.isPlaying()) {
    sound5.stop();
    }

    if ( sound6.isPlaying() ) {

              sound6.pause();
              //sound3.pause();

         } else {
          sound6.loop();
         }
    }




}

  this.draw = function(){
    background(0, 0, 0);
    noStroke();
    fill(255);
    //textSize(18);
    text("-- PRESS 1 TO FINISH -- \n\n", 830,690);

    if ( sound.isPlaying() ) {
       image(img6, 700, 0, 300, 300);
     }

     if ( sound2.isPlaying() ) {
        image(img6, 700, 0, 300, 300);
      }

      if ( sound3.isPlaying() ) {
         image(img10, 700, 0, 300, 300);
       }

       if ( sound4.isPlaying() ) {
          image(img8, 600, 0, 400, 300);
        }

        if ( sound5.isPlaying() ) {
           image(img7, 700, 0, 300, 300);
         }

         if ( sound6.isPlaying() ) {
            image(img9, 700, 0, 300, 300);
          }




    var vol = amp.getLevel();
      var diam = map(vol, 0, 0.3, 10, 500);

      fill(135, 223, 255);
      stroke(215, 178, 255);
      ellipse(width / 2, height / 2, diam, diam);

      fill(246, 0, 255);
      stroke(25, 0, 255);
      ellipse(800, 400, diam, diam);

      fill(251, 145, 255);
      stroke(84, 155, 255);
      ellipse(diam, 400, diam, diam);

      fill(43, 82, 255);
      stroke(246, 0, 255);
      ellipse(600, 500, diam, diam);

      fill(25, 0, 255);
      stroke(246, 0, 255);
      rect(40, 120, diam, diam);


      fill(215, 178, 255);
      stroke(135, 223, 255);
      rect(240, 520, diam, diam);


      fill(84, 155, 255);
      stroke(251, 145, 255);
      rect(400, diam, diam, diam);



    click1.draw();
    click2.draw();
    click3.draw();
    click4.draw();
    click5.draw();
    click6.draw();


    var spectrum = fft.analyze();
    noStroke();
    //fill(239, 237, 237); // spectrum is green
    stroke(255, 46, 0); // waveform is red


    for (var i = 0; i< spectrum.length; i++){
      var amp2 = spectrum[i];
      var y = map(amp2,100,600, height,0);
      //var h = -height + map(spectrum[i], 100, 255, height, 200);
      fill(255, 188, 33);
      rect(i * w,y,w, height - y);

    }

    var waveform = fft2.waveform();
    noFill();
    beginShape();
    strokeWeight(5);
    stroke(124, 25, 211); // waveform is red
    fill(104, 255, 102);
    for (var i = 0; i< waveform.length; i++){
      var x = map(i, 0, waveform.length, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
    endShape();

    //text('click to play/pause', 10, 10);
  }

  // fade sound if mouse is over canvas

}
