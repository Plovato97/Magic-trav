var paulApiKey = "975536fb3351415c84e19797480ca9b3"

var cityGet = document.querySelector("#user-form")
var inputEl = document.querySelector("#cityInput")
var dateEl = document.querySelector("#dateInput")


// var requestOptions = {
//     method: 'GET',
//   };
  
// //   fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=" + paulApiKey + "", requestOptions)
// //     .then(response => response.json())
// //     .then(result => console.log(result))
// //     .catch(error => console.log('error', error));


var getCityCord = function(citySearch) {
    var cordApiUrl = "https://api.geoapify.com/v1/geocode/search?text=" + citySearch + "&apiKey=" + paulApiKey + "";
    fetch(cordApiUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        })
    };

    var formSubmit = function(event) {
        event.preventDefault();
    
        // get value from input element
        var cityName = inputEl.value.trim();
        var cityDate = dateEl.value
    
        if (cityName && cityDate) {
            getCityCord(cityName);
            inputEl.value = "";
            dateEl.value = "";
        } else if (cityName) {
            alert("Please Select a date")
        } else if (cityDate) {
            alert ("please select a City")
        } else {
            alert ("Please submit a correct City and Date")
        }
        console.log(event);
    };

cityGet.addEventListener("submit", formSubmit);
