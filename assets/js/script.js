var paulApiKey = "975536fb3351415c84e19797480ca9b3"
var paulGoogleKey = "907ec1e8803cfbf3d22fe89f046820e63d79077da707c105cd43afe193c82645"

var divTest1 = document.querySelector("#cardE1")
var divTest2 = document.querySelector("#cardE2")
var divTest3 = document.querySelector("#cardE3")
var divTest4 = document.querySelector("#cardE4")
var divTest5 = document.querySelector("#cardE5")
var divTest6 = document.querySelector("#cardE6")


var loadLocalStorage = function (eventRandom) {
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
};

  
    var saveLocalStorage = function (array) {
      citiesArray = [];
  
      citiesArray.push(array);
      localStorage.setItem("searchHistory", JSON.stringify(citiesArray));
    };


  var loadPast = function () {
    var pastSearches = JSON.parse(localStorage.getItem("searchHistory"));

    console.log(loadPast);
  }

