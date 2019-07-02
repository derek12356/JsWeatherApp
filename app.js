"use strict";

//searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    var cityName = $('#city').val();
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
    var apiKey = 'c0f162c6420e88cefdedcd4b0de5bc73';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;

    $.ajax({
        url:url,
        data:{
            format:'JSON'
        },
        type:'GET',

        success:function(data){
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase(), data.main.humidity,data.wind.speed, data.main.pressure);
            weatherData.temperature = data.main.temp;
            
            updateWeather(weatherData);
            console.log(data);
        },
        error:function(){
            alert('Something went wrong!');
        }


    });
}





//     var http = new XMLHttpRequest();
//     var apiKey = 'c0f162c6420e88cefdedcd4b0de5bc73';
//     var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;

//     http.open('GET', url);
//     http.onreadystatechange = function() {
//         if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
//             var data = JSON.parse(http.responseText);
//             var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
//             weatherData.temperature = data.main.temp;
//             updateWeather(weatherData);
//         } else if (http.readyState === XMLHttpRequest.DONE) {
//             alert('Something went wrong!');
//         }
//     };
//     http.send();
// }

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    weatherHumidity.textContent = weatherData.humidity;
    weatherWind.textContent = weatherData.wind;
    weatherPressure.textContent = weatherData.pressure;
    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}


    function confirm(){
			$.ajax({
				url: 'http://lara01.herokuapp.com/api/counter',
				data:{
					'counter' : 1
				},
				type: 'POST',
				success:function(data){
					
				}
			});
		};
