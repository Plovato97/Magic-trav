var paulApiKey = "975536fb3351415c84e19797480ca9b3"
var paulGoogleKey = "cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9"

var cityGet = document.querySelector("#user-form")
var inputEl = document.querySelector("#cityInput")
var dateEl = document.querySelector("#dateInput")
var statesEl = document.querySelector("#statesSelect")
var divTest = document.querySelector("#testLinks")

// uses the submit form eleement to gather the date/city/state paremeters to be used on other functions
var formSubmit = function(event) {
    event.preventDefault();

    // get value from input element
    var cityName = inputEl.value.trim();
    var cityDate = dateEl.value;
    var statesSelector = statesEl.value;

    if (cityName && cityDate && statesSelector) {
        eventsFun(cityName, statesSelector, cityDate);
        // searchCity(cityName, statesSelector);
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

//  eventsfun uses the parameters for citysearch, state and date to search through the api and create an array of available events within those paremeters
var eventsFun = function(citySearch, state, dates) {
    var eventsApi = "https://serpapi.com/search.json?engine=google_events&q=Events+in+" + citySearch + "+" + state + "+" + dates + "&api_key=cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9";
    fetch(eventsApi)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            eventsLoop(data);
        })
    };

var eventsLoop = function(data) {
    var eventAddress = data.events_results;

for (var i = 0; i <= eventAddress.length; i++) {

    console.log(eventAddress[i].event_location_map.link);

// searchEvent(eventAddress[i].address[0]);
// var contentTest = createAttribute 
// divTest.textContent(eventAddress[i].address[0])

}};

cityGet.addEventListener("submit", formSubmit);
