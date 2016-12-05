
// just wanted to write one from scratch to test my
// retention of the stuff covered so far.


var hdr;

var tiBox;
var tiBoxLiveText;
var tiBoxCompletedText;

var sliderValText;
var sldr;

function sliderChanged() {
    sliderValText.style("font-size", sldr.value() + "pt")
}

function updateInputText() {
    tiBoxCompletedText.html(tiBox.value());
}

function editedInputText() {
    tiBoxLiveText.html(tiBox.value());
}


function setup() {

    hdr = createElement("h1", "My Page from Scratch");

    sldr = createSlider(18, 36, 24);
    sldr.input(sliderChanged)
    sliderValText = createP(sldr.value());

    tiBox = createInput("Enter text here.");

    // triggered when browser thinks editing is done
    tiBox.changed(updateInputText);

    // triggered every keystroke
    tiBox.input(editedInputText);

    tiBoxLiveText = createP(tiBox.value());
    tiBoxCompletedText = createP(tiBox.value());
}


function draw() {
    background(127);
    text("Default canvas.", 20, 20);

    // update the slider text. not the best place for this.
    sliderValText.html(sldr.value());
}
