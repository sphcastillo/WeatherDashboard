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
        
        console.log("Current City infomation: ",response);
        
        console.log("does icon work?", response.weather[0].icon);
        
        var currentCityName = response.name;
        console.log("Current City Name: ", currentCityName);

        var currentCityTemperature = response.main.temp;
        console.log("Current City Temperature: ", currentCityTemperature);

        var currentCityHumidity = response.main.humidity;
        console.log("Current City Humidity: ", currentCityHumidity);

        var currentCityWindSpeed = response.wind.speed;
        console.log("Current City Wind Speed: ", currentCityWindSpeed);

        var currentUVIndex;



        var icon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        var currentDayIcon = $("<img>").attr("src", icon);
        

        var cityDateIcon = $("<h3>").text(`${currentCityName}` + " (" + `${ourStartDate}` + ") " + `${currentDayIcon}`);
        $("#cityInfo").append(cityDateIcon);

        var todaysTemperature = $("<h5>").text("Temperature: " + `${currentCityTemperature}`);
        
        var todaysHumidity = $("<h5>").text("Humidity: " + `${currentCityHumidity}`);
        
        var todaysWindSpeed = $("<h5>").text("Wind Speed: " + `${currentCityWindSpeed}`);
        // var todaysUVIndex = $("<h5>").text("UV Index: ");

        $("#cityInfo").append(todaysTemperature, todaysHumidity, todaysWindSpeed);
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