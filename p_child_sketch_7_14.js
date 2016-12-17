// showing how to change parent and child of objects

var images = [];

function setup() {
    noCanvas();

    for (var i = 0; i < 5; i++) {

        var p = createP("This is a link: ");
        p.style('background-color', '#CCC');
        p.style('padding', '24px');

        var a = createA("#", 'Add a bear!');
        a.mousePressed(addPhoto);

        // set a to have p as a parent
        a.parent(p);

        var clearArrayButton = select("#clear_array");
        clearArrayButton.mousePressed(removeImagesArray);

        var clearAllButton = select("#clear_all");
        clearAllButton.mousePressed(removeImgSelectAll);
    }


}

function removeImagesArray() {
    for (var i = 0; i < images.length; i++) {
        images[i].remove();
    }

    images = [];
}

function removeImgSelectAll() {
    // better method, using selectAll to find the images
    //  instead of manually tracking them via array
    myImages = selectAll("img");
    for (var i = 0; i < myImages.length; i++) {
        myImages[i].remove();
    }
    images = [];
}


function addPhoto() {
    // makes an img DOM element, not loading a file to draw on the canvas
    var img = createImg('bear.jpg');
    img.size(346,230);

    // save a ref to it in my array, so I can delete them later
    images.push(img);

    // get the parent of the a link
    pOfA = this.parent();
    // now make the image a child of it (sibling of the a link)
    img.parent(pOfA);
}
