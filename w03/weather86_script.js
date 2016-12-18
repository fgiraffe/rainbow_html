
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
    var wiW = data;
    var temperatureString = Math.floor(wiW.main.temp) + "F";

    dstElem = select("#w_temp");
    dstElem.html(temperatureString);

    var iconPath = "http://openweathermap.org/img/w/" + wiW.weather[0].icon + ".png"
    var iconImg = createImg(iconPath);
    dstElem.child(iconImg);

}

function gaData(data) {
    var gaW = data;
    var temperatureString = Math.floor(gaW.main.temp) + "F";

    dstElem = select("#g_temp");
    dstElem.html(temperatureString);

    var iconPath = "http://openweathermap.org/img/w/" + gaW.weather[0].icon + ".png"
    var iconImg = createImg(iconPath);
    dstElem.child(iconImg);

}
