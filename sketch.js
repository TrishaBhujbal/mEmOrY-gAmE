//declaring and initializing variables
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var img1, img2, img3, img4, img5, img6, commonimg, backimg, backsprite;
var touch, win;
var a = 0, b = 0;
var score = 0;
var gameState = "play";
var timer = 0, finishtime = 0;


//loading assets
function preload() {
    commonimg = loadImage("tile015.png");
    img1 = loadImage("tile001.png");
    img2 = loadImage("tile002.png");
    img3 = loadImage("tile008.png");
    img4 = loadImage("tile020.png");
    img5 = loadImage("tile026.png");
    img6 = loadImage("tile009.png");
    touch = loadSound("touch.mp3");
    win = loadSound("win.mp3");
    backimg = loadImage("background2.png");
}


function setup() {
    createCanvas(600, 700);
    //creating the cards or tiles
    box1 = createSprite(150, 100, 50, 50);
    box2 = createSprite(300, 100, 50, 50);
    box3 = createSprite(450, 100, 50, 50);
    box4 = createSprite(150, 250, 50, 50);
    box5 = createSprite(300, 250, 50, 50);
    box6 = createSprite(450, 250, 50, 50);
    box7 = createSprite(150, 400, 50, 50);
    box8 = createSprite(300, 400, 50, 50);
    box9 = createSprite(450, 400, 50, 50);
    box10 = createSprite(150, 550, 50, 50);
    box11 = createSprite(300, 550, 50, 50);
    box12 = createSprite(450, 550, 50, 50);

    //giving a common image to one side
    commonImage();

    //timer that gets incremented for 1000milisec
    setInterval(timerfun, 1000);

}

function draw() {
    background("lightgrey");

    //text formatting
    textSize(40);
    fill("black");
    textStyle("bold");
    textFont("Brush Script MT");

    //placing text according to game state
    if (score != 6) {
        text("Timer: " + timer + "sec", 20, 670);
        text("Score: " + score, 20, 30);

    }
    else {
        text("Time: " + timer + "sec", 220, 390);
        text("Score: " + score, 250, 430);
    }

    //checking if there is a mouse event
    box1.onMousePressed = function () {
        commonImage();
        touch.play();
        this.addImage(img1);
        a = 1;
        setInterval(function () { a = 0 }, 5000);
    }
    box2.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img5);
        a = 5;
        setInterval(function () { a = 0 }, 5000);
    }
    box3.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img2);
        a = 2;
        setInterval(function () { a = 0 }, 5000);
    }
    box4.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img3);
        a = 3;
        setInterval(function () { a = 0 }, 5000);
    }
    box5.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img4);
        a = 4;
        setInterval(function () { a = 0 }, 5000);
    }
    box6.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img1);
        b = 1;
    }
    box7.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img2);
        b = 2;
    }
    box8.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img3);
        b = 3;
    }
    box9.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img4);

        b = 4;
    }
    box10.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img6);
        a = 6;
        setInterval(function () { a = 0 }, 5000);
    }
    box11.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img5);
        b = 5;
    }
    box12.onMousePressed = function () {
        touch.play();
        commonImage();
        this.addImage(img6);

        b = 6;
    }

    //checking if any pair is matching
    answer();

    //game over page with score and time taken
    if (score === 6) {
        textSize(60);
        backimg = loadImage("background.jpg")
        fill("#235E3C");
        textStyle("bold");
        textFont("Brush Script MT");
        text("Well done!!", 185, 350);

    }
    drawSprites();
}

function commonImage() {
    box1.addImage(commonimg);
    box2.addImage(commonimg);
    box3.addImage(commonimg);
    box4.addImage(commonimg);
    box5.addImage(commonimg);
    box6.addImage(commonimg);
    box7.addImage(commonimg);
    box8.addImage(commonimg);
    box9.addImage(commonimg);
    box10.addImage(commonimg);
    box11.addImage(commonimg);
    box12.addImage(commonimg);
}

function answer() {
    if (a == 1 && b == 1) {
        win.play();
        box1.addImage(img1);
        box6.addImage(img1);
        setInterval(function () {
            box1.destroy();
            box6.destroy();
        }, 200)
        score++;;
        a = 0; b = 0;
    }
    else if (a == 2 && b == 2) {
        win.play();
        box3.addImage(img2);
        box7.addImage(img2);
        setInterval(function () {
            box3.destroy();
            box7.destroy();
        }, 200);
        score++;
        a = 0; b = 0;
    }
    else if (a == 3 && b == 3) {
        win.play();
        box4.addImage(img3);
        box8.addImage(img3);
        setInterval(function () {
            box4.destroy();
            box8.destroy();
        }, 200);
        score++;
        a = 0; b = 0;
    }
    else if (a == 4 && b == 4) {
        win.play();
        box5.addImage(img4);
        box9.addImage(img4);
        setInterval(function () {
            box5.destroy();
            box9.destroy();
        }, 200);
        score++;
        a = 0; b = 0;
    }
    else if (a == 5 && b == 5) {
        win.play();
        box2.addImage(img5);
        box11.addImage(img5);
        setInterval(function () {
            box2.destroy();
            box11.destroy();
        }, 200);
        score++;
        a = 0; b = 0;
    }
    else if (a == 6 && b == 6) {
        win.play();
        box10.addImage(img6);
        box12.addImage(img6);
        setInterval(function () {
            box10.destroy();
            box12.destroy();
        }, 200);
        score++;
        a = 0; b = 0;
    }
}

//run timer if game is on
function timerfun() {
    if (score != 6)
        timer++;
}