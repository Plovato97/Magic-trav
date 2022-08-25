var paulApiKey = "975536fb3351415c84e19797480ca9b3"
var paulGoogleKey = "cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9"

var cityGet = document.querySelector("#user-form")
var inputEl = document.querySelector("#cityInput")
var dateEl = document.querySelector("#dateInput")
var statesEl = document.querySelector("#statesSelect")


var routePlan = function(long, lat, long2, lat2) {
var routeApi = "https://api.geoapify.com/v1/routing?waypoints=" + long + "," + lat + "|" + long2 + "," + lat2 + "&mode=drive&apiKey=" + paulApiKey + "";
fetch(routeApi)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        getCord(data)
    })
};


var eventsFun = function(citySearch, state) {
    var eventsApi = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_events&q=Events+in+" + citySearch + "+" + state + "&api_key=cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9";
    fetch(eventsApi)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            // getCord(data)
        })
    };
    

var searchCity = function(citySearch, state) {
    var cordApiUrl = "https://api.geoapify.com/v1/geocode/search?text=" + citySearch + "%20" + state + "&apiKey=" + paulApiKey + "";
    fetch(cordApiUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            getCord(data)
        })
    };

var getCord = function(data) {
    var cityLattidue = data.features[0].properties.lat;
    var cityLongitude = data.features[0].properties.lon;
    console.log(cityLattidue);
    console.log(cityLongitude);
}
    var formSubmit = function(event) {
        event.preventDefault();
    
        // get value from input element
        var cityName = inputEl.value.trim();
        var cityDate = dateEl.value;
        var statesSelector = statesEl.value;
    
        if (cityName && cityDate && statesSelector) {
            eventsFun(cityName, statesSelector);
            searchCity(cityName, statesSelector);
            inputEl.value = "";
            dateEl.value = "";
            statesEl.value = "";
        } else if (cityName) {
            alert("Please Select a date")
        } else if (cityDate) {
            alert ("please select a City")
        } else {
            alert ("Please submit a correct City, State and Date")
        }
        console.log(event);
    };

cityGet.addEventListener("submit", formSubmit);
