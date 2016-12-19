var PASSCODE = "17c2d1d1742e7b2da2a4a08bbf8063113ecf81f894c68514d";

// example for "ubiquity"
// http://api.wordnik.com:80/v4/word.json/ubiquity/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5



var wordLink;

function setup() {
    noCanvas();

    var word = "tutorial";

    wordLink = createA("#", word); // empty link for our word
    wordLink.mousePressed(askWordNik);

}

function askWordNik() {

    var wordToLookup = wordLink.html();

    var urlHeader = "http://api.wordnik.com:80/v4/word.json/";
    var urlTrailer_Examples = "/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5"
    var urlTrailer_RelatedWords = "/relatedWords?useCanonical=false&limitPerRelationshipType=10"
    var apiKeyString = "&api_key=" + PASSCODE;

    var request = urlHeader + wordToLookup + urlTrailer_RelatedWords + apiKeyString;
    var respns = loadJSON(request, gotWNData);
}

function gotWNData(wnData) {

    println(wnData);
    var newWordIndex = floor(random(0, wnData.length));

    println(newWordIndex);
    wordLink.html(wnData[newWordIndex].words[0]);
}

function draw() {

}
