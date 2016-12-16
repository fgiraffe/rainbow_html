// Coding Challenge 38: Word Interactor
// break down inout text into words, output them all, style just the words
// and leave the punctuation alone.

function setup() {
    noCanvas();

    aButton = select("#a_submit");

    aButton.mousePressed(doSomething);

}

function doSomething() {

    var textBox = select("#misc_input");
    var textIn = textBox.value();
    var outP = select("#outputPara");

    var splitRegex = /(\W+)/;
    // anything not a word char
    // but use grouping to also capture the puncuation.

    var chunks = textIn.split(splitRegex);

    // create a span element for each word and punc

    for (var i = 0; i < chunks.length; i++) {
        // create a span for each word
        // put them all inside one paragrah for convenience.

        var tSpan;
        tSpan = createSpan(chunks[i]);
        tSpan.parent(outP);

        // if the chunk is a word, put some actions on it
        if (/\w/.test(chunks[i])) {
            tSpan.mouseOver(handleMouseOver);
            tSpan.mouseOut(handleMouseOut);
        }
    }

}

function handleMouseOut() {
    this.style('background-color', 'initial');

}

function handleMouseOver() {

    // if the highlighted word starts with a number
    // make the color more BLUE
    // if it is a letter make it more red
    var c;
    var txt = this.html();
    var regStartsWithNum = /\d/

    if(txt.match(regStartsWithNum)) {
        c = color(random(127), random(127), random(192,255));
    } else {
        c = color(random(192,255), random(127), random(127));
    }


    this.style('background-color', c);
}
