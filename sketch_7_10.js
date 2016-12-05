var my_unicorn;
var my_odd_paras;


function uniMouseIn() {
    // refers to global var, ugly!
    my_unicorn.style("padding", "16pt");
    my_unicorn.style("background-color", '#F0F');
}

function uniMouseOut() {
    my_unicorn.style("padding", "0pt")
    my_unicorn.style("background-color", '#FFF');
}

function oddsMouseIn() {
    // "this" is a p5 additon, not regular js
    this.style("padding", "24pt")
}

function oddsMouseOut() {
    // "this" is a p5 additon, not regular js
    this.style("padding", "0pt")
}


function setup() {
    // select is just going to return the FIRST match
    my_unicorn = select("#unicorn");

    my_unicorn.mouseOver(uniMouseIn);
    my_unicorn.mouseOut(uniMouseOut);

    my_odd_paras = selectAll(".odd");

    for (var i = 0; i < my_odd_paras.length; i++) {
        my_odd_paras[i].mouseOver(oddsMouseIn);
        my_odd_paras[i].mouseOut(oddsMouseOut);
    }

}

function draw() {

}
