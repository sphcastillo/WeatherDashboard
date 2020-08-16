var apiKey = "fcb6dfd486a0cd687db59694dc486ace";



var ourStartDate = moment().format('L');  
console.log("today's date: ", ourStartDate);

var tomorrow = moment().add(1, 'days').format('L'); 
console.log("tomorrow: ", tomorrow);

var dayAfterTomorrow = moment().add(2, 'days').format('L'); 
console.log("day after tomorrow: ", dayAfterTomorrow);

var threeDaysFromNow = moment().add(3, 'days').format('L'); ;
console.log("three days from now: ", threeDaysFromNow);

var fourDaysFromNow = moment().add(4, 'days').format('L'); 
console.log("four days from now: ", fourDaysFromNow);

var fiveDaysFromNow = moment().add(5, 'days').format('L'); 
console.log("five days from now: ", fiveDaysFromNow);



$("#searchButton").click(function(event){

    event.preventDefault();

    var allTheCities = [];

    var cityInputed = $("#citySearchInput").val();
    console.log("city: ", cityInputed);

    allTheCities = JSON.parse(localStorage.getItem("cities")) || [];
    allTheCities.push(cityInputed);
    localStorage.setItem("cities", JSON.stringify(allTheCities));



    showCityWeather(cityInputed);

})


function showCityWeather(city) {

    var oneDayInTheCityURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

    $.ajax({
        url: oneDayInTheCityURL,
        method: "GET"
    })
    .then(function(response){
        
        console.log("current city",response);
        console.log("does icon work?", response.weather[0].icon);

        var icon = "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
        $("#currentDayWeather").attr("src", icon);
        $("#currentDayWeather").append(icon);
    })



    // $("#forecast").empty();

    // $("#dayOne").empty();
    // $("#dayTwo").empty();
    // $("#dayThree").empty();
    // $("#dayFour").empty();
    // $("#dayFive").empty();

}

function fiveDayForecast(){


    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputed + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response){



        console.log("5 Day Forecast: ", response);
    })

}