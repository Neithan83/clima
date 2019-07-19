var btnGetWeather = document.querySelector("#btnGetWeather");
btnGetWeather.addEventListener("click", function() {
  var city = document.querySelector("#cityname").value;
  city = encodeURIComponent(city);
  var key = "83a5f95b7e141fb64f8f8dfd98930529";
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key; 
  fetch(url)
    .then(function(response) {
    return response.json();
  })
    .then(function(weatherData) {
    var temperature = weatherData.main.temp;
    var tempC = temperature - 273.15;
    var tempF = temperature * 9/5 - 459.67;
    var p = document.querySelector("#temperature");
    p.innerHTML = tempC.toFixed(0) + "C / " + 
      tempF.toFixed(0) + "F";
    p.className = "";
    if (tempC<5) {
      p.className = "cold";
    } 
    if (tempC>30) {
      p.className = "hot";
    }
  })
    .catch(function() {
    alert("Weather not available");
  })
});