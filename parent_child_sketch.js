//  code from lessoon 7.13 on changing class/removing class on the fly
// finds an item with a static class which was created in the html file
// and adds items to it. 

var addButt;
var myOL;

function addItenToOL() {
    var num = int(random(0, 20));
    var numString = str(num);
    var newListItem = createElement("li", numString);

    // if it is an odd number, make it be in the oddItems class
    if (num % 2 != 0) {
        newListItem.class("oddItems");
        // note if these already had a class it would now have 2
        // use removeClass to remedy.
    }
    // finally add it to the ordered list

    newListItem.parent(myOL);
}


function setup() {
    noCanvas();

    addButt = select('#addButton');
    addButt.mousePressed(addItenToOL);

    myOL = select('#myOL');

}
