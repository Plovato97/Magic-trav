var paulApiKey = "975536fb3351415c84e19797480ca9b3"
var paulGoogleKey = "cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9"

var cityGet = document.querySelector("#user-form")
var inputEl = document.querySelector("#cityInput")
var dateEl = document.querySelector("#dateInput")
var statesEl = document.querySelector("#statesSelect")
var divTest1 = document.querySelector("#cardContent1")
var divTest2 = document.querySelector("#cardContent2")
var divTest3 = document.querySelector("#cardContent3")
var divTest4 = document.querySelector("#cardContent4")
var divTest5 = document.querySelector("#cardContent5")
var divTest6 = document.querySelector("#cardContent6")
var fortuneEl = document.querySelector("#fortuneTest")
var divBody1 = document.querySelector("#card1body")
var divBody2 = document.querySelector("#card2body")
var divBody3 = document.querySelector("#card3body")
var divBody4 = document.querySelector("#card4body")
var divBody5 = document.querySelector("#card5body")
var divBody6 = document.querySelector("#card6body")
var divFooter1 = document.querySelector("#card1footer")
var divFooter2 = document.querySelector("#card2footer")
var divFooter3 = document.querySelector("#card3footer")
var divFooter4 = document.querySelector("#card4footer")
var divFooter5 = document.querySelector("#card5footer")
var divFooter6 = document.querySelector("#card6footer")
var adventureSubmit = document.querySelector("#adventureSubmit")
//adding functionality to the dark theme button
var darktoggler = document.querySelector('#dark')





// uses the submit form eleement to gather the date/city/state paremeters to be used on other functions
var formSubmit = function (event) {
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
        alert("please select a City")
    } else {
        alert("Please submit a correct City, State and Date")
    }
    console.log(event);
};

//  eventsfun uses the parameters for citysearch, state and date to search through the api and create an array of available events within those paremeters
var eventsFun = function (citySearch, state, dates) {
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

// suffles any array passed through this parameter
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

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
var eventsLoop = function (data) {

    var eventRandom = shuffle(data.events_results);



    /* Card ONE*/
    var resultsBtn = document.createElement("a");
    resultsBtn.setAttribute("target", "_blank")
    resultsBtn.textContent = "Begin your Journey"
    resultsBtn.href = eventRandom[1].event_location_map.link;

    var titleSpan = document.createElement("p");
    titleSpan.classList.add("tile_title");
    titleSpan.textContent = eventRandom[1].title;

    var timeDiv = document.createElement("p")
    timeDiv.classList.add("tile_subtitle");
    timeDiv.textContent = eventRandom[1].date.when;

    var descriptionSpan = document.createElement("p");
    descriptionSpan.textContent = eventRandom[1].description;


    /* Code to add image to card 1*/
    // var imageHolder = document.createElement("div").classList.add;
    // imageHolder.src = "assets/images/placeholder.png";
    // var src = document.getElementById("imgE1");
    // src.appendChild(imageHolder);

    divTest1.appendChild(titleSpan);
    divTest1.appendChild(timeDiv);
    divBody1.appendChild(descriptionSpan);
    divFooter1.appendChild(resultsBtn);


    /* CARD 2 */
    var resultsBtn2 = document.createElement("a");
    resultsBtn2.setAttribute("target", "_blank")
    resultsBtn2.textContent = "Begin your Journey"
    resultsBtn2.href = eventRandom[2].event_location_map.link;

    var titleSpan2 = document.createElement("p");
    titleSpan2.classList.add("tile_title");
    titleSpan2.textContent = eventRandom[2].title;

    var timeDiv2 = document.createElement("p")
    timeDiv2.classList.add("tile_subtitle");
    timeDiv2.textContent = eventRandom[2].date.when;

    var descriptionSpan2 = document.createElement("p");
    descriptionSpan2.textContent = eventRandom[2].description;


    /* Code to add image to card 1*/
    // var imageHolder = document.createElement("div").classList.add;
    // imageHolder.src = "assets/images/placeholder.png";
    // var src = document.getElementById("imgE1");
    // src.appendChild(imageHolder);

    divTest2.appendChild(titleSpan2);
    divTest2.appendChild(timeDiv2);
    divBody2.appendChild(descriptionSpan2);
    divFooter2.appendChild(resultsBtn2);

    /* CARD 3 */
    var resultsBtn3 = document.createElement("a");
    resultsBtn3.setAttribute("target", "_blank")
    resultsBtn3.textContent = "Begin your Journey"
    resultsBtn3.href = eventRandom[3].event_location_map.link;

    var titleSpan3 = document.createElement("p");
    titleSpan3.classList.add("tile_title");
    titleSpan3.textContent = eventRandom[3].title;

    var timeDiv3 = document.createElement("p")
    timeDiv3.classList.add("tile_subtitle");
    timeDiv3.textContent = eventRandom[3].date.when;

    var descriptionSpan3 = document.createElement("p");
    descriptionSpan3.textContent = eventRandom[3].description;


    /* Code to add image to card 1*/
    // var imageHolder = document.createElement("div").classList.add;
    // imageHolder.src = "assets/images/placeholder.png";
    // var src = document.getElementById("imgE1");
    // src.appendChild(imageHolder);

    divTest3.appendChild(titleSpan3);
    divTest3.appendChild(timeDiv3);
    divBody3.appendChild(descriptionSpan3);
    divFooter3.appendChild(resultsBtn3);

    /*CARD 4 */
    var resultsBtn4 = document.createElement("a");
    resultsBtn4.setAttribute("target", "_blank")
    resultsBtn4.textContent = "Begin your Journey"
    resultsBtn4.href = eventRandom[4].event_location_map.link;

    var titleSpan4 = document.createElement("p");
    titleSpan4.classList.add("tile_title");
    titleSpan4.textContent = eventRandom[4].title;

    var timeDiv4 = document.createElement("p")
    timeDiv4.classList.add("tile_subtitle");
    timeDiv4.textContent = eventRandom[4].date.when;

    var descriptionSpan4 = document.createElement("p");
    descriptionSpan4.textContent = eventRandom[4].description;


    /* Code to add image to card 1*/
    // var imageHolder = document.createElement("div").classList.add;
    // imageHolder.src = "assets/images/placeholder.png";
    // var src = document.getElementById("imgE1");
    // src.appendChild(imageHolder);

    divTest4.appendChild(titleSpan4);
    divTest4.appendChild(timeDiv4);
    divBody4.appendChild(descriptionSpan4);
    divFooter4.appendChild(resultsBtn4);

    /* CARD 5 */
    var resultsBtn5 = document.createElement("a");
    resultsBtn5.setAttribute("target", "_blank")
    resultsBtn5.textContent = "Begin your Journey"
    resultsBtn5.href = eventRandom[5].event_location_map.link;

    var titleSpan5 = document.createElement("p");
    titleSpan5.classList.add("tile_title");
    titleSpan5.textContent = eventRandom[5].title;

    var timeDiv5 = document.createElement("p")
    timeDiv5.classList.add("tile_subtitle");
    timeDiv5.textContent = eventRandom[5].date.when;

    var descriptionSpan5 = document.createElement("p");
    descriptionSpan5.textContent = eventRandom[5].description;


    /* Code to add image to card 1*/
    // var imageHolder = document.createElement("div").classList.add;
    // imageHolder.src = "assets/images/placeholder.png";
    // var src = document.getElementById("imgE1");
    // src.appendChild(imageHolder);

    divTest5.appendChild(titleSpan5);
    divTest5.appendChild(timeDiv5);
    divBody5.appendChild(descriptionSpan5);
    divFooter5.appendChild(resultsBtn5);

    /* CARD 6 */
    var resultsBtn6 = document.createElement("a");
    resultsBtn6.setAttribute("target", "_blank")
    resultsBtn6.textContent = "Begin your Journey"
    resultsBtn6.href = eventRandom[6].event_location_map.link;

    var titleSpan6 = document.createElement("p");
    titleSpan6.classList.add("tile_title");
    titleSpan6.textContent = eventRandom[6].title;

    var timeDiv6 = document.createElement("p")
    timeDiv6.classList.add("tile_subtitle");
    timeDiv6.textContent = eventRandom[6].date.when;

    var descriptionSpan6 = document.createElement("p");
    descriptionSpan6.textContent = eventRandom[6].description;


    /* Code to add image to card 1*/
    // var imageHolder = document.createElement("div").classList.add;
    // imageHolder.src = "assets/images/placeholder.png";
    // var src = document.getElementById("imgE1");
    // src.appendChild(imageHolder);

    divTest6.appendChild(titleSpan6);
    divTest6.appendChild(timeDiv6);
    divBody6.appendChild(descriptionSpan6);
    divFooter6.appendChild(resultsBtn6);

};

/* we need to create an event handler that will populate this api within the same div. or somewhere within the page
so that it can load the fortune and six lucky numbers as part of the Api. There's no way to create a button from DOM events and push a link
through it. So we need to keep that "a" element and create a box/button around it and make a click event handler to run
this function oce it's used. function to run is below */
var fortuneFun = function () {

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

var fortuneLoop = function (data) {
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
var adventureSelected = function (event) {
    var idElement = event
    console.log(event);

    // add class element that makes the div reveal the context once this function is ran. 
    // idElement.setClass.add("unhide")
    fortuneFun();
}


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