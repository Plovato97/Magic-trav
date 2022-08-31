var divTest1 = document.querySelector("#cardContent1")
var divTest2 = document.querySelector("#cardContent2")
var divTest3 = document.querySelector("#cardContent3")
var divTest4 = document.querySelector("#cardContent4")
var divTest5 = document.querySelector("#cardContent5")
var divTest6 = document.querySelector("#cardContent6")

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

$(document).ready(function () {
  var pastSearches = localStorage.getItem("searchHistory");
  eventRandom = JSON.parse(pastSearches);

  console.log(eventRandom);
  loadLocalStorage(eventRandom)
});


var loadLocalStorage = function (eventRandom) {

  console.log(eventRandom[0]);

    /* Card ONE*/
    var resultsBtn = document.createElement("a");
    resultsBtn.setAttribute("target", "_blank")
    resultsBtn.textContent = "Begin your Journey"
    resultsBtn.href = eventRandom[0][0].event_location_map.link;

    var titleSpan = document.createElement("h3");

    titleSpan.classList.add("tile_title");
    titleSpan.textContent = eventRandom[0][0].title;

    var timeDiv = document.createElement("h6")
    timeDiv.classList.add("tile_subtitle");

    timeDiv.textContent = eventRandom[0][0].date.when;

    var descriptionSpan = document.createElement("p");
    descriptionSpan.textContent = eventRandom[0][0].description;


    divTest1.appendChild(titleSpan);
    divTest1.appendChild(timeDiv);
    divTest1.appendChild(descriptionSpan);
    divTest1.appendChild(resultsBtn);

    /* Code to add image to card 1*/
    // var imageHolder = document.createElement("div").classList.add;
    // imageHolder.src = "assets/images/placeholder.png";
    // var src = document.getElementById("imgE1");
    // src.appendChild(imageHolder);

    divTest1.appendChild(titleSpan);
    divTest1.appendChild(timeDiv);
    divBody1.appendChild(descriptionSpan);
    divFooter1.appendChild(resultsBtn);

    var resultsBtn2 = document.createElement("a");
    resultsBtn2.setAttribute("target", "_blank")
    resultsBtn2.textContent = "Begin your Journey"
    resultsBtn2.href = eventRandom[0][1].event_location_map.link;

    var titleSpan2 = document.createElement("h3");
    titleSpan2.classList.add("tile_title");
    titleSpan2.textContent = eventRandom[0][1].title;

    var timeDiv2 = document.createElement("h6")
    timeDiv2.classList.add("tile_subtitle");
    timeDiv2.textContent = eventRandom[0][1].date.when;

    var descriptionSpan2 = document.createElement("p");
    descriptionSpan2.textContent = eventRandom[0][1].description;


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
    resultsBtn3.href = eventRandom[0][2].event_location_map.link;

    var titleSpan3 = document.createElement("h3");
    titleSpan3.classList.add("tile_title");
    titleSpan3.textContent = eventRandom[0][2].title;

    var timeDiv3 = document.createElement("h6")
    timeDiv3.classList.add("tile_subtitle");

    timeDiv3.textContent = eventRandom[0][2].date.when;

    var descriptionSpan3 = document.createElement("p");
    descriptionSpan3.textContent = eventRandom[0][2].description;


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
    resultsBtn4.href = eventRandom[0][3].event_location_map.link;

    var titleSpan4 = document.createElement("h3");
    titleSpan4.classList.add("tile_title");
    titleSpan4.textContent = eventRandom[0][3].title;

    var timeDiv4 = document.createElement("h6")
    timeDiv4.classList.add("tile_subtitle");
    timeDiv4.textContent = eventRandom[0][3].date.when;

    var descriptionSpan4 = document.createElement("p");
    descriptionSpan4.textContent = eventRandom[0][3].description;


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
    resultsBtn5.href = eventRandom[0][4].event_location_map.link;

    var titleSpan5 = document.createElement("h3");
    titleSpan5.classList.add("tile_title");
    titleSpan5.textContent = eventRandom[0][4].title;

    var timeDiv5 = document.createElement("h6")
    timeDiv5.classList.add("tile_subtitle");
    timeDiv5.textContent = eventRandom[0][4].date.when;

    var descriptionSpan5 = document.createElement("p");
    descriptionSpan5.textContent = eventRandom[0][4].description;

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
    resultsBtn6.href = eventRandom[0][5].event_location_map.link;

    var titleSpan6 = document.createElement("h3");
    titleSpan6.classList.add("tile_title");
    titleSpan6.textContent = eventRandom[0][5].title;

    var timeDiv6 = document.createElement("h6")
    timeDiv6.classList.add("tile_subtitle");
    timeDiv6.textContent = eventRandom[0][5].date.when;

    var descriptionSpan6 = document.createElement("p");
    descriptionSpan6.textContent = eventRandom[0][5].description;


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

