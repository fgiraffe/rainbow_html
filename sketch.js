var txt;
var padding = 5;

var rx = 100;

var canv;
var myH1;

function changeStyle () {
    txt.style("color", "black");
    padding += 10;
    padStr = padding + "px";
    txt.style("padding", padStr);
    myH1.html("Changed contents of element!")
}

function setup() {

    canv = createCanvas(200, 200);
    canv.position(400,500);

    myH1 = createElement("h1", "Waiting. (from js)");
    myH1.position(400,100);

    createP("Fave color is blue!(from js)");
    createP("Fave color is blue! (from js)");

    txt = createP("Text from js we will style");
    txt.style("background-color", "orange");

    myButt = createButton("Engage");
    myButt.mousePressed(changeStyle);
}

function redRect() {
    background(127);
    fill(255, 170, 0);
    rect(100, rx, 50, 50);
    // rx = (rx + 10) % 200;
}

function draw() {
    redRect()
}
