
// code for Rainbow 2.7: regular expression use in js wih
// exec(): uses stateful matching

var phoneNumsOut;
var phoneButton;

function setup() {
    noCanvas();

    phoneButton = select("#phone_submit");
    phoneButton.mousePressed(extractPhoneNums);

}

function extractPhoneNums() {
    var phoneTextBox = select("#phone_input");
    var phoneString = phoneTextBox.value();
    var phoneNumArray = [];
    var phonePrefixArray = [];

    var phoneRegex = /(\d{3})[-.](\d{4})/g;
    // put the first three digits into Group 1
    // second 4 digits into 2

    results = phoneRegex.exec(phoneString);
    // exec can be called until it returns null for subsequent matches

    while (results != null) {
        // println(results);
        phoneNumArray.push(results[0]); // 0 is the entire matching string
        phonePrefixArray.push(results[1]); // 1 is the first group

        results = phoneRegex.exec(phoneString);
    }


    var outString = "";
    var srcStr;

    for(srcStr of phoneNumArray) {
        outString += srcStr;
        outString += ", ";
    }
    var phone_answer = select("#phone_answer");
    phone_answer.html(outString);

    var outString = "";
    for(srcStr of phonePrefixArray) {
        outString += "(" + srcStr + ")";
        outString += ", ";
    }
    phone_answer = select("#phone_prefix");
    phone_answer.html(outString);
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
