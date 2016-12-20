var PASSCODE = "17c2d1d1742e7b2da2a4a08bbf8063113ecf81f894c68514d";

// example for "ubiquity"
// http://api.wordnik.com:80/v4/word.json/ubiquity/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5

// present user with a word.
// every time they click on it, find a related word using wordnik.
// show the relation, and add the word to display.
// when we run out of related words, show GAME OVER

var wordLink;
var chainPara;

function setup() {
    noCanvas();

    var word = "tutorial";

    wordLink = createA("#", word); // empty link for our word
    wordLink.mousePressed(askWordNik);

    chainPara = createP(word);


}

function askWordNik() {

    var wordToLookup = wordLink.html();

    var urlHeader = "http://api.wordnik.com:80/v4/word.json/";
    var urlTrailer_Examples = "/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5"
    var urlTrailer_RelatedWords = "/relatedWords?useCanonical=false&limitPerRelationshipType=10"
    var apiKeyString = "&api_key=" + PASSCODE;

    var request = urlHeader + wordToLookup + urlTrailer_RelatedWords + apiKeyString;
    loadJSON(request, gotWNData);
}

function endGame() {
    wordLink.html("GAME OVER");
    wordLink.mousePressed(doNothing);
}

function doNothing() {

}

function gotWNData(wnData) {

    if (!wnData || (wnData.length <= 0)) {
        // the chain of related words is NOT infinite.
        // We can eventually run out of words that relate.
        // so do.. something?
        endGame();
    } else {
        var countOfRelatedWordTypes = wnData.length;
        var randTypeOfRelatedWord = floor(random(0, countOfRelatedWordTypes));

        var countOfRelatedWords = wnData[randTypeOfRelatedWord].words.length;
        var randomWordIndex = floor(random(0, countOfRelatedWords));

        if (countOfRelatedWords > 0) {
            var newWord = wnData[randTypeOfRelatedWord].words[randomWordIndex];

            wordLink.html(newWord);

            var oldchain = chainPara.html();
            var newStr = newWord + " <- (" +
                    wnData[randTypeOfRelatedWord].relationshipType + ")" + oldchain;
            chainPara.html(newStr);
        } else {
            endGame();
        }

    }

}
