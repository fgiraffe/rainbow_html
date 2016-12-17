// https://youtu.be/KMRgLi2TBhQ?list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX
// assigning/changing class dynamically.

var NUM_APPLES = 30;
var NUM_BLUEBERRIES = 30;

function setup() {

    for (var i = 0; i < NUM_APPLES; i++) {

        var p = createP('Apples');
        var x = floor(random(windowWidth));
        var y = floor(random(windowHeight));
        p.position(x, y);
        p.mousePressed(appleMousePress);
        p.class("apple");
    }

    for (var i = 0; i < NUM_BLUEBERRIES; i++) {

        // a tag with just # means I'll handle link in js
        var p = createA("#",'Blueberries');
        var x = floor(random(windowWidth));
        var y = floor(random(windowHeight));
        p.class("blueberry");
        p.mousePressed(bbMousePress);
        p.position(x, y);
    }
}

function appleMousePress() {
    this.removeClass('apple');
    this.class('blueberry');
    this.html("I was an apple");
    // but NOTE it still does not have mousePressed set so
    // it has no function for that. no magical inheritance.
    // have to set manually
    this.mousePressed(bbMousePress);
}


function bbMousePress() {
    // reminder "this" comes from p5
    // now the bb is BOTH a blueberry AND an apple because multiple inheritance
    this.class('apple');
    this.html("I was a BB");
    this.mousePressed(appleMousePress);

}
