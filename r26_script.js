
// code for Rainbow 2.6: regular expression use in js wih
// test() and match()

var outputText;
var emailButton;
var phoneButton;

function setup() {
    noCanvas();

    emailButton = select("#email_submit");
    emailButton.mousePressed(validateEmail);

    phoneButton = select("#phone_submit");
    phoneButton.mousePressed(extractPhoneNums);

}

function extractPhoneNums() {
    var phoneTextBox = select("#phone_input");
    var phoneString = phoneTextBox.value();
    var phoneRegex = /\d{3}[-.]\d{4}/g;

    var matchingNums = phoneString.match(phoneRegex);
    var outString = "";
    var srcStr;
    println(matchingNums);

    for(srcStr of matchingNums) {
        outString += srcStr;
        outString += " ";
    }
    var phone_answer = select("#phone_answer");
    phone_answer.html(outString);
}


function validateEmail() {

    var emailTextBox = select("#email_input");
    var emailString = emailTextBox.value();

    var regex = /\w+@\w+\.(net|com|org)/;

    var answer_element = select("#email_answer");
    var results = regex.test(emailString);
    answer_element.html(results);
}




function misc_regex_tests() {

    var sampleString = "Unicorns and UNICORNS and unicorns rainbows and cupcakes";
    var unicornRegex = /unicorn/;

    println( sampleString.match(unicornRegex));
    // returns "unicorn", the third one

    var rgx2 = /\w+/;
    println( sampleString.match(rgx2));
    // returns "unicorns", FIRST match only

    // flags control scope of matches
    // g - global
    // i - case sensitive

    var rgx3 = /\w+/g; // note g at end
    println( sampleString.match(rgx3));
    // returns "unicorns", "and", "rainbows", "and", "cupcakes"
    // ALL of the matches

    var allCapsUni = /UNICORNS/i;
    println( sampleString.match(allCapsUni));
    // returns "unicorn"


}
