// handing files dropped into a page via events
// Schiffman lecture 7.15

var dropzone;


function setup() {
    noCanvas();

    dropzone = select("#dropzone");
    dropzone.dragOver(handleDragOver);
    dropzone.dragLeave(handleDragLeave);

    // first callback is to actually receive the file(s)
    // second callback is other stuff to do when files are dropped
    // in this example we just un-highlight the drop box
    dropzone.drop(handleFile, handleDragLeave);
}

function handleFile(file) {
    // file param is a p5 file object

    // function gets called once for EACH file dropped.
    // so p5 handles multi-file drop for us.

    println(file.name);

    // add a para to give some spacing
    createP("");
    img = createImg(file.data);
    img.size(200, 200);

    // note if we wanted to put the file IN our canvas
    // (as opposed to crateing a new element) we could
    // use the image() function.
}

function handleDrop_ZZZZZ() {
    // in this example all we need to do is get rid
    // of the highlight on the drop zone.
    // So we can just call the function we already have.
    handleDragLeave();
}

function handleDragOver() {
    dropzone.style('background-color', "#ccc");
}

function handleDragLeave() {
    dropzone.style('background-color', "#FFF");
}
