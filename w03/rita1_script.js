// code for video https://youtu.be/lIPEvh8HbGQ?list=PLRqwX-V7Uu6a343yZ_JcPzIric4SOGqMZ


var textIn;
var gLexicon;

function setup() {
    noCanvas();
    randomSeed(99);

    textIn = select("#text_input");

    butt = select("#text_submit");
    butt.mousePressed(doRiTAMagic);
    gLexicon = new RiLexicon();
}

function doRiTAMagic() {
    rawTxt = textIn.value();
    var outText = "";


    var r = new RiString(rawTxt);
    var rs = r.words();
    var partsOfSpeech = r.pos();

    for (var i = 0; i < rs.length; i++) {

        // swap word using the lexicon to randomly replace using
        // the same part of speech!
        // outText += gLexicon.randomWord(partsOfSpeech[i]);

        // even better, just swap the nouns and plural nouns
        // and search for those typers using regex
        var speechPart = partsOfSpeech[i];

        if (/nn.*/.test(speechPart)) {
            newWord = gLexicon.randomWord(speechPart);
            outText += newWord;
        } else {
            outText += rs[i];
        }

        outText += " ";
    }

    createP(outText);
}
