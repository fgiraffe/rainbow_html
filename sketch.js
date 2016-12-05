var txt;
var padding = 5;
var rx = 100;
var canv;
var myH1;
var bgColor;
var myNewButt;
var sliderText;
var mySlide;
var myInput;

var defHeaderText = "Text from js!"

function changeStyle() {
    txt.style("color", "black");
    padding += 10;
    padStr = padding + "px";
    txt.style("padding", padStr);
    myH1.html("Changed contents of element!")
}

// GLOBAL p5 js mouse handler for ENTIRE page
function mousePressed() {
    // bgColor = color(random(255), random(255), random(255));
}

function changeColor() {
    bgColor = color(random(255), random(255), random(255));
}

function overpara() {
    myH1.html("Spooky!");
}

function outPara() {
    myH1.html(defHeaderText);
}

function updateInputText() {
    myH1.html(myInput.value());
}

function setup() {

    bgColor = color(200);

    canv = createCanvas(200, 200);
    canv.position(200, 300);

    myH1 = createElement("h1", defHeaderText);
    myH1.position(400, 100);

    createP("Fave color is blue!(from js)");
    createP("Fave color is blue! (from js)");

    txt = createP("Text from js we will style");
    txt.style("background-color", "orange");

    myButt = createButton("Engage");
    myButt.mousePressed(changeStyle);

    myNewButt = createButton("Change Color");
    myNewButt.mousePressed(changeColor);
    createP(""); // empty para to separate button
    mySlide = createSlider(10, 100, 86);

    createP(""); // empty para to separate text field
    myInput = createInput("Type your name!");
    myInput.changed(updateInputText);

    myH1.mouseOver(overpara);
    myH1.mouseOut(outPara);

}

function redRect() {
    fill(255, 170, 0);
    rect(100, mySlide.value(), 50, 50);
    // rx = (rx + 10) % 200;
}

function draw() {
    background(bgColor);
    redRect();
    text(myInput.value(), 20, 20);

}
