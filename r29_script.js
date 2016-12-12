// regex use from js video 2.9 using replace
// like search, global flag g is needed for more than one replace

function setup() {
    noCanvas();

    vButton = select("#vowels_submit");
    uButton = select("#fourchar_submit");
    pButton = select("#phone_submit");

    vButton.mousePressed(doubleVowels);
    uButton.mousePressed(replaceCallbackFunc);
    pButton.mousePressed(callbackWithGroups);

}


// -------------------------------------------------------------------
function doubleVowels() {
    // example function, capture each vowel and emit it twice

    var textbox = select("#misc_input");
    var textInBox = textbox.value();

    var newtext = textInBox.replace(/([aeiou])/g, "$1$1");
    textbox.value(newtext);
}

// -------------------------------------------------------------------
function fourLetterToUpper(match) {
    // return val is what match gets replaced with
    // replace all four char words with uppercase

    if( match.length == 4) {
        return match.toUpperCase();
    } else {
        return match;
    }

}

function replaceCallbackFunc() {
    var textbox = select("#misc_input");
    var textInBox = textbox.value();
    var regex = /\b\w+\b/g

    var newtext = textInBox.replace(regex, fourLetterToUpper);
    textbox.value(newtext);
}

// -------------------------------------------------------------------
function groupsCallback(entireMatch, group1, group2) {
    // callback gets variable args depending on groups
    // or could use special "arguments" array
    // groupsCallback(arguments)

    return "(" + group1 + ")" + " - [" + group2 + "]";
}


function callbackWithGroups() {
    var textbox = select("#misc_input");
    var textInBox = textbox.value();
    var regex = /(\d{3})-(\d{4})/g

    var newtext = textInBox.replace(regex, groupsCallback);
    textbox.value(newtext);
    println("wut");

}
