function setup() {
    noCanvas();

    phoneButton = select("#split_submit");
    phoneButton.mousePressed(performSplit);

}

function performSplit() {

    var textbox = select("#misc_input");
    var splitOutText = select("#phone_answer");

    var regexForDelimiter = /\s/; // naive, does not handle ","

    regexForDelimiter = /[,\s/]/; // wrong, this matches "," and " "
    regexForDelimiter = /[-;,\s/]+/;
    // have to use a pattern to handle consecutive breaks

    regexForDelimiter = /(\W+)/;


    // if you use capturing paren the delimiters also gets put into the list

    var srcText = textbox.value();

    var outText = srcText.split(regexForDelimiter);
    outText = outText.join(' <> ');

    splitOutText.html(outText);

}
