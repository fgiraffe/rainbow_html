
var latElem;
var longElem;

var latStr = "";
var longStr;

var issCanvasX;
var issCanvasY;

var canvH = 300;
var canvW = 2 * canvH;


function setup() {
    var delayInMilliSec = 1000;

    latElem = select("#iss_long");
    longElem = select("#iss_lat");

    createCanvas(canvW, canvH);
    background(51);

    setInterval(getISSData, delayInMilliSec);
}

function getISSData() {
    loadJSON("http://api.open-notify.org/iss-now.json", gotNewData, "jsonp");
}


function gotNewData(data) {

    var issX = data.iss_position.latitude;
    var issY = data.iss_position.longitude;

    // map the coords to something nice
    // lat 90 (N Pole) to 0 (equator) to -90 (S Pole)
    // long -180 t0 180
    issCanvasX = map(issX, -90, 90, 0, width);
    issCanvasY = map(issY, -180, 180, 0, height);

    latStr = Number(issX).toFixed(2);
    longStr = Number(issY).toFixed(2);

}

function draw() {
    latElem.html(latStr);
    longElem.html(longStr);

    fill(100, 175, 175);
    ellipse(issCanvasX, issCanvasY, 24, 24);
}
