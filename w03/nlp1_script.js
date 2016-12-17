// https://youtu.be/tk_JGu2AbJY?list=PLRqwX-V7Uu6a343yZ_JcPzIric4SOGqMZ

var textIn;

// ref to window's DOM element: the library?
nlp = window.nlp_compromise

function setup() {
    noCanvas();

    textIn = select("#text_input");

    butt = select("#text_submit");
    butt.mousePressed(doNLPMagic);
}

function doNLPMagic() {
    var rawTxt = textIn.value();
    var sen = nlp.sentence(rawTxt);
    var outText = "";

    for (var i = 0; i < sen.terms.length; i++) {
        var pos = sen.terms[i].pos;
        var word = sen.terms[i].text;

        if (pos.Noun && !pos.Pronoun) {
            word = nlp.noun(word).pluralize();
        } else if (pos.Verb){
            word = nlp.verb(word).conjugate().future
        }

        outText += word;
        outText += sen.terms[i].whitespace.trailing;
    }

    createP(outText);
}
