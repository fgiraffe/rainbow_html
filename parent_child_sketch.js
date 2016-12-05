

var addButt;
var myOL;

function addItenToOL() {
    var numString = int (random(0,20));
    var newListItem = createElement("li", numString);
    newListItem.parent(myOL);
}


function setup() {
    noCanvas();

    addButt = select('#addButton');
    addButt.mousePressed(addItenToOL);

    myOL = select('#myOL');

}
