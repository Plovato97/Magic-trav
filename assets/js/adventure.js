var paulApiKey = "975536fb3351415c84e19797480ca9b3"
var paulGoogleKey = "cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9"

var cityGet = document.querySelector("#user-form")
var inputEl = document.querySelector("#cityInput")
var dateEl = document.querySelector("#dateInput")
var statesEl = document.querySelector("#statesSelect")
var divTest = document.querySelector("#testLinks")
var fortuneEl = document.querySelector("#fortuneTest")

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

function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

var eventsLoop = function(data) {

var eventRandom = shuffle(data.events_results);

console.log(eventRandom)

    var resultsSpan = document.createElement("div");
    resultsSpan.textContent = eventRandom[1].event_location_map.link;

    var titleSpan = document.createElement("div");
    titleSpan.textContent = eventRandom[1].title;

    var descriptionSpan = document.createElement("div");
    descriptionSpan.textContent = eventRandom[1].description;

    divTest.appendChild(titleSpan);
    divTest.appendChild(descriptionSpan);
    divTest.appendChild(resultsSpan);

};

    var fortuneFun = function() {

        var fortuneApi = "https://digital-fortune-cookies-api.herokuapp.com/fortune?amount=7";
        fetch(fortuneApi)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                fortuneLoop(data);
            })
        };

var fortuneLoop = function(data) {
    var fortune = data.cookie.fortune;
    var luckNumber = data.cookie.luckyNumbers;

var fortuneTeller = document.createElement("span")
fortuneTeller.textContent = fortune;
fortuneEl.append(fortuneTeller);

    for (var i = 0; i < luckNumber.length; i++) {
        console.log(luckNumber[i]);

        var fortuneDescription = document.createElement("div")
        fortuneDescription.textContent = luckNumber[i];
        fortuneEl.append(fortuneDescription);
}

};

cityGet.addEventListener("submit", formSubmit);


// adventureSubmit.addEventListener("submit", fortuneFun)
