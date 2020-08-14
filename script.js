var apiKey = "fcb6dfd486a0cd687db59694dc486ace";


$("#searchButton").click(function(event){

    event.preventDefault();

    var allTheCities = [];

    var cityInputed = $("#citySearchInput").val();
    console.log("city: ", cityInputed);

    allTheCities = JSON.parse(localStorage.getItem("cities")) || [];
    allTheCities.push(cityInputed);
    localStorage.setItem("cities", JSON.stringify(allTheCities));


    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputed + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response){



        console.log("response", response);
    })



    showCityWeather(cityInputed);

})


function showCityWeather(city) {
    var cityURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    $.ajax({
        url: cityURL,
        method: "GET"
    })
    .then(function(response){
        console.log("current city",response)
    })
}