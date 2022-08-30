var paulApiKey = "975536fb3351415c84e19797480ca9b3"
var paulGoogleKey = "cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9"

var cityGet = document.querySelector("#user-form")
var inputEl = document.querySelector("#cityInput")
var dateEl = document.querySelector("#dateInput")
var statesEl = document.querySelector("#statesSelect")
var errorEl = document.querySelector("#alert")

var divTest1 = document.querySelector("#cardE1")
var divTest2 = document.querySelector("#cardE2")
var divTest3 = document.querySelector("#cardE3")
var divTest4 = document.querySelector("#cardE4")
var divTest5 = document.querySelector("#cardE5")
var divTest6 = document.querySelector("#cardE6")
var fortuneEl = document.querySelector("#fortuneTest")
var adventureSubmit = document.querySelector("#adventureSubmit")


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
        document.getElementById("alert").innerHTML = '';
    } else if (cityName) {
        document.getElementById("alert").innerHTML = "<h4 style='color: red;'>Please select a Date</h4>";
    } else if (cityDate) {
        document.getElementById("alert").innerHTML = "<h4 style='color: red;'>Please select a City</h4>";
    } else {
        document.getElementById("alert").innerHTML = "<h4 style='color: red;'>Please submit a correct City, State and Date</h4>"; 
    }
    console.log(event);
};

//  eventsfun uses the parameters for citysearch, state and date to search through the api and create an array of available events within those paremeters
var eventsFun = function(citySearch, state, dates) {
    var eventsApi = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_events&q=Events+in+" + citySearch + "+" + state + "+" + dates + "&api_key=cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9";
    fetch(eventsApi)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            eventsLoop(data);
        })
    };

    // suffles any array passed through this parameter
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

    /* This function is the main function that starts with shuffling the array with eventRanom variable
    then once shuffled, There is 9 options to pick. I listed 1-6 as the default options that will
    populate on the screen since it will always be random from the 9 choices provided. 1-6. We need to create classes
    that we can add to the divs to hide the generated content in the divs and once they chose an adventure/clicks a button
    then the class will change and revela the generated content within that specific div */
var eventsLoop = function(data) {

var eventRandom = shuffle(data.events_results);


/* Card ONE*/
    var resultsBtn= document.createElement("a");
    resultsBtn.setAttribute("target", "_blank")
    resultsBtn.textContent = "Begin your Journey"
    resultsBtn.href = eventRandom[1].event_location_map.link;

    var titleSpan = document.createElement("h3");
    titleSpan.classList.add("card__mobile-title")
    titleSpan.textContent = eventRandom[1].title;
    
    var timeDiv = document.createElement("h6")
    timeDiv.textContent = eventRandom[1].date.when;

    var descriptionSpan = document.createElement("div");
    descriptionSpan.classList.add("card__body");
    descriptionSpan.textContent = eventRandom[1].description;


    divTest1.appendChild(titleSpan);
    divTest1.appendChild(timeDiv);
    divTest1.appendChild(descriptionSpan);
    divTest1.appendChild(resultsBtn);

    /* Code to add image to card 1*/
    var imageHolder = document.createElement("img");
    imageHolder.src = "assets/images/placeholder.png";
    var src = document.getElementById("imgE1");
    divTest1.appendChild(imageHolder);


/* CARD 2 */
    var resultsBtn2= document.createElement("a");
    resultsBtn2.setAttribute("target", "_blank")
    resultsBtn2.textContent = "Begin your Journey"
    resultsBtn2.href = eventRandom[2].event_location_map.link;

    var titleSpan2 = document.createElement("h3");
    titleSpan2.classList.add("card__mobile-title")
    titleSpan2.textContent = eventRandom[2].title;

    var timeDiv2 = document.createElement("h6")
    timeDiv2.textContent = eventRandom[2].date.when;

    var descriptionSpan2 = document.createElement("div");
    descriptionSpan2.classList.add("card__body");
    descriptionSpan2.textContent = eventRandom[2].description;

     /* Code to add image to card 2*/
     var imageHolder = document.createElement("img");
     imageHolder.src = "assets/images/placeholder.png";
     var src = document.getElementById("imgE2");
     src.appendChild(imageHolder);

    divTest2.appendChild(titleSpan2);
    titleSpan2.appendChild(timeDiv2);
    divTest2.appendChild(descriptionSpan2);
    divTest2.appendChild(resultsBtn2);

    



/* CARD 3 */
    var resultsBtn3= document.createElement("a");
    resultsBtn3.setAttribute("target", "_blank")
    resultsBtn3.textContent = "Begin your Journey"
    resultsBtn3.href = eventRandom[3].event_location_map.link;

    var titleSpan3 = document.createElement("h3");
    titleSpan3.classList.add("card__mobile-title")
    titleSpan3.textContent = eventRandom[3].title;

    var timeDiv3 = document.createElement("h6")
    timeDiv3.textContent = eventRandom[3].date.when;

    var descriptionSpan3 = document.createElement("div");
    descriptionSpan3.classList.add("card__body");
    descriptionSpan3.textContent = eventRandom[3].description;

     /* Code to add image to card 2*/
     var imageHolder = document.createElement("img");
     imageHolder.src = "assets/images/placeholder.png";
     var src = document.getElementById("imgE3");
     src.appendChild(imageHolder);
    

    divTest3.appendChild(titleSpan3);
    titleSpan3.appendChild(timeDiv3);
    divTest3.appendChild(descriptionSpan3);
    divTest3.appendChild(resultsBtn3);


/*CARD 4 */
    var resultsBtn4= document.createElement("a");
    resultsBtn4.setAttribute("target", "_blank")
    resultsBtn4.textContent = "Begin your Journey"
    resultsBtn4.href = eventRandom[4].event_location_map.link;

    var titleSpan4 = document.createElement("h3");
    titleSpan4.classList.add("card__mobile-title")
    titleSpan4.textContent = eventRandom[4].title;

    var timeDiv4 = document.createElement("h6")
    timeDiv4.textContent = eventRandom[4].date.when;

    var descriptionSpan4 = document.createElement("div");
    descriptionSpan4.classList.add("card__body");
    descriptionSpan4.textContent = eventRandom[4].description;

     /* Code to add image to card 2*/
     var imageHolder = document.createElement("img");
     imageHolder.src = "assets/images/placeholder.png";
     var src = document.getElementById("imgE4");
     src.appendChild(imageHolder);

    divTest4.appendChild(titleSpan4);
    titleSpan4.appendChild(timeDiv4);
    divTest4.appendChild(descriptionSpan4);
    divTest4.appendChild(resultsBtn4);


/* CARD 5 */
    var resultsBtn5= document.createElement("a");
    resultsBtn5.setAttribute("target", "_blank")
    resultsBtn5.textContent = "Begin your Journey"
    resultsBtn5.href = eventRandom[5].event_location_map.link;

    var titleSpan5 = document.createElement("h3");
    titleSpan5.classList.add("card__mobile-title")
    titleSpan5.textContent = eventRandom[5].title;

    var timeDiv5 = document.createElement("h6")
    timeDiv5.textContent = eventRandom[5].date.when;

    var descriptionSpan5 = document.createElement("div");
    descriptionSpan5.classList.add("card__body");
    descriptionSpan5.textContent = eventRandom[5].description;

     /* Code to add image to card 2*/
     var imageHolder = document.createElement("img");
     imageHolder.src = "assets/images/placeholder.png";
     var src = document.getElementById("imgE5");
     src.appendChild(imageHolder);

    divTest5.appendChild(titleSpan5);
    titleSpan5.appendChild(timeDiv5);
    divTest5.appendChild(descriptionSpan5);
    divTest5.appendChild(resultsBtn5);


/* CARD 6 */
    var resultsBtn6= document.createElement("a");
    resultsBtn6.setAttribute("target", "_blank")
    resultsBtn6.textContent = "Begin your Journey"
    resultsBtn6.href = eventRandom[6].event_location_map.link;

    var titleSpan6 = document.createElement("h3");
    titleSpan6.classList.add("card__mobile-title")
    titleSpan6.textContent = eventRandom[6].title;

    var timeDiv6 = document.createElement("h6")
    timeDiv6.textContent = eventRandom[6].date.when;

    var descriptionSpan6 = document.createElement("div");
    descriptionSpan6.classList.add("card__body");
    descriptionSpan6.textContent = eventRandom[6].description;

     /* Code to add image to card 2*/
     var imageHolder = document.createElement("img");
     imageHolder.src = "assets/images/placeholder.png";
     var src = document.getElementById("imgE6");
     src.appendChild(imageHolder);

    divTest6.appendChild(titleSpan6);
    titleSpan6.appendChild(timeDiv6);
    divTest6.appendChild(descriptionSpan6);
    divTest6.appendChild(resultsBtn6);

saveLocalStorage(eventRandom);

};

/* we need to create an event handler that will populate this api within the same div. or somewhere within the page
so that it can load the fortune and six lucky numbers as part of the Api. There's no way to create a button from DOM events and push a link
through it. So we need to keep that "a" element and create a box/button around it and make a click event handler to run
this function oce it's used. function to run is below */ 
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

var fortuneTeller = document.createElement("div")
fortuneTeller.textContent = fortune;
fortuneEl.append(fortuneTeller);

    
// this append should be set to the correct div we want this information to show up. Most likely best to show up outside of hidden div.
        var fortuneDescription = document.createElement("div")
        fortuneDescription.textContent = luckNumber;
        fortuneEl.append(fortuneDescription);


};

// // Might be best if full div is clickable so we can just grab the Id of that div and change the class directly.
var adventureSelected = function(event) {
var idElement = event
    console.log(event);

    // add class element that makes the div reveal the context once this function is ran. 
    // idElement.setClass.add("unhide")
    fortuneFun();
}


var saveLocalStorage = function (array) {
    citiesArray = [];

    citiesArray.push(array);
    localStorage.setItem("search-history", JSON.stringify(citiesArray));
  };
  

// Initial date/ city/ state submite form handler
cityGet.addEventListener("submit", formSubmit)

// Once they submit themselves to an adventure. this event listener will populate the ID to the
// adventureSelected function that will run the unhideclass within the Id of that clicked element, and run the fortunefun Function.
// we probably will need to create 5 other event listeners to be linked to a hidden div within the pages that will load the content once they chose their city etc.
adventureSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(event.target.id);
        adventureSelected(event.target.id)
})