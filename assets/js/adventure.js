var paulApiKey = "975536fb3351415c84e19797480ca9b3"
var paulGoogleKey = "cf8b1e356c94fd5a088afa5884193906daf90a725ab4763d792e35a05f4a8ef9"

var cityGet = document.querySelector("#user-form")
var inputEl = document.querySelector("#cityInput")
var dateEl = document.querySelector("#dateInput")
var statesEl = document.querySelector("#statesSelect")
var divTest = document.querySelector("#testLinks")
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

<<<<<<< HEAD
    console.log(data)
    var i = 0;

    //lol i dunno why this works but it does lots of tears got us to this point 
    if(i<=5){
    
    //main DIV to display results it is a grid to keep them in line
    var cardShell = document.createElement("div");

    var cardContent = document.createElement("div");
    cardContent.classList.add("card","h-100p","u-flex","u-flex-column");

    //container div for contents to display correctly i.e title and subtitle 
    var cardContainer = document.createElement("div");
    cardContainer.classList.add("card__title-container");


    //adding stock img to card
    var img = document.createElement("img");
    img.src = ""

    var titleSpan = document.createElement("p");
    titleSpan.textContent = data.title;
    titleSpan.classList.add("title");

    var descriptionSpan = document.createElement("div");
    descriptionSpan.textContent = data.description;
    descriptionSpan.classList.add("content")


    var resultsSpan = document.createElement("a");
    resultsSpan.textContent = "LET'S GO!";
    resultsSpan.link = data.event_location_map.link;
    resultsSpan.classList.add("btn","btn-link","outline");

   

    //MAIN CONTENT HOLDER FOR ALL CARDS
    divTest.append(cardShell);

    //Appends Card Content to card shell
    cardShell.append(cardContent);
    cardShell.append(cardImg);

    cardContent.append(cardContainer);

    //added content of card to card to display
    cardContainer.append(titleSpan);
    cardContainer.append(descriptionSpan);


    cardContainer.append(resultsSpan);
    
    };
    i++

}
=======
var eventRandom = shuffle(data.events_results);

    var resultsBtn= document.createElement("a");
    resultsBtn.setAttribute("target", "_blank")
    resultsBtn.textContent = "Begin your Journey"
    resultsBtn.href = eventRandom[1].event_location_map.link;

    var titleSpan = document.createElement("div");
    titleSpan.textContent = eventRandom[1].title;

    var descriptionSpan = document.createElement("div");
    descriptionSpan.textContent = eventRandom[1].description;

    divTest.appendChild(titleSpan);
    divTest.appendChild(descriptionSpan);
    divTest.appendChild(resultsBtn);

    var resultsBtn2= document.createElement("a");
    resultsBtn2.setAttribute("target", "_blank")
    resultsBtn2.textContent = "Begin your Journey"
    resultsBtn2.href = eventRandom[2].event_location_map.link;

    var titleSpan2 = document.createElement("div");
    titleSpan2.textContent = eventRandom[2].title;

    var descriptionSpan2 = document.createElement("div");
    descriptionSpan2.textContent = eventRandom[2].description;

    divTest.appendChild(titleSpan2);
    divTest.appendChild(descriptionSpan2);
    divTest.appendChild(resultsBtn2);

   
    var resultsBtn3= document.createElement("a");
    resultsBtn3.setAttribute("target", "_blank")
    resultsBtn3.textContent = "Begin your Journey"
    resultsBtn3.href = eventRandom[3].event_location_map.link;

    var titleSpan3 = document.createElement("div");
    titleSpan3.textContent = eventRandom[3].title;

    var descriptionSpan3 = document.createElement("div");
    descriptionSpan3.textContent = eventRandom[3].description;

    divTest.appendChild(titleSpan3);
    divTest.appendChild(descriptionSpan3);
    divTest.appendChild(resultsBtn3);

    var resultsBtn4= document.createElement("a");
    resultsBtn4.setAttribute("target", "_blank")
    resultsBtn4.textContent = "Begin your Journey"
    resultsBtn4.href = eventRandom[4].event_location_map.link;

    var titleSpan4 = document.createElement("div");
    titleSpan4.textContent = eventRandom[4].title;

    var descriptionSpan4 = document.createElement("div");
    descriptionSpan4.textContent = eventRandom[4].description;

    divTest.appendChild(titleSpan4);
    divTest.appendChild(descriptionSpan4);
    divTest.appendChild(resultsBtn4);

    var resultsBtn5= document.createElement("a");
    resultsBtn5.setAttribute("target", "_blank")
    resultsBtn5.textContent = "Begin your Journey"
    resultsBtn5.href = eventRandom[5].event_location_map.link;

    var titleSpan5 = document.createElement("div");
    titleSpan5.textContent = eventRandom[5].title;

    var descriptionSpan5 = document.createElement("div");
    descriptionSpan5.textContent = eventRandom[5].description;

    divTest.appendChild(titleSpan5);
    divTest.appendChild(descriptionSpan5);
    divTest.appendChild(resultsBtn5);

    var resultsBtn6= document.createElement("a");
    resultsBtn6.setAttribute("target", "_blank")
    resultsBtn6.textContent = "Begin your Journey"
    resultsBtn6.href = eventRandom[6].event_location_map.link;

    var titleSpan6 = document.createElement("div");
    titleSpan6.textContent = eventRandom[6].title;

    var descriptionSpan6 = document.createElement("div");
    descriptionSpan6.textContent = eventRandom[6].description;

    divTest.appendChild(titleSpan6);
    divTest.appendChild(descriptionSpan6);
    divTest.appendChild(resultsBtn6);



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

var fortuneTeller = document.createElement("span")
fortuneTeller.textContent = fortune;
fortuneEl.append(fortuneTeller);

    for (var i = 0; i < luckNumber.length; i++) {
        console.log(luckNumber[i]);
// this append should be set to the correct div we want this information to show up. Most likely best to show up outside of hidden div.
        var fortuneDescription = document.createElement("div")
        fortuneDescription.textContent = luckNumber[i];
        fortuneEl.append(fortuneDescription);
}

};

// // Might be best if full div is clickable so we can just grab the Id of that div and change the class directly.
var adventureSelected = function(event) {
var idElement = event
    console.log(event);
>>>>>>> develop

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
