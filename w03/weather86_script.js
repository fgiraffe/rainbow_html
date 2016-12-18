var gaW;
var wiW;

var PASSCODE = "APPID=f2a4572c04e4385b0342d8ca4c381dcb"

function setup() {
    noCanvas();

    var units = "units=imperial"

    var baseQueryURL = "http://api.openweathermap.org/data/2.5/weather?"
    var wiscCityCode = "id=5261457";
    var gaCityCode = "id=4206547";

    var qry = baseQueryURL + wiscCityCode + "&" + units + "&" + PASSCODE;
    loadJSON(qry, wiData);

    qry = baseQueryURL + gaCityCode + "&" + units + "&" + PASSCODE;
    loadJSON(qry, gaData);
}

function wiData(data) {
    wiW = data;
    dstElem = select("#w_temp");
    dstElem.html(wiW.main.temp);

    // iconData = "src='http://openweathermap.org/img/w/" + wiW.weather.icon + ".png"
    createImg("http://openweathermap.org/img/w/01d.png");

    // var icon = ("<img src='http://openweathermap.org/img/w/" + weatherDataIn.weather[0].icon + ".png'>");
    //
    // then
    //
    // $('#display').html( icon );

}

function gaData(data) {
    gaW = data;
    dstElem = select("#g_temp");
    dstElem.html(gaW.main.temp);

}
