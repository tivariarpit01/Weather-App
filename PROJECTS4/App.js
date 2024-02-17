const apikey = 'af406de88b561ea64356b71e800b1c38';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const searchBox = document.querySelector(".Search input");
const searchBtn = document.querySelector(".Search button");
const weatherIcon =document.querySelector(".weather-icon");





async function checkWeather(city) {
  const response = await fetch(apiUrl + city +`&appid=${apikey}`)
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  else{
    let  data = await response.json()
    // console.log(data);
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
  
    if(data.weather[0].main ==  "Clouds"){
      weatherIcon.src = "/PROJECTS4/images/clouds.png"
    }
   else if(data.weather[0].main ==  "Rain"){
      weatherIcon.src = "/PROJECTS4/images/rain.png"
    }
    else if(data.weather[0].main ==  "Clear"){
      weatherIcon.src = "/PROJECTS4/images/clear.png"
    }
    else if(data.weather[0].main ==  "Drizzle"){
      weatherIcon.src = "/PROJECTS4/images/drizzle.png"
    }
    else if(data.weather[0].main ==  "Mist"){
      weatherIcon.src = "/PROJECTS4/images/mist.png"
    }
    else if(data.weather[0].main ==  "Snow"){
      weatherIcon.src = "/PROJECTS4/images/snow.png"
    }
  
    document.querySelector(".weather").style.display = 'block';
    document.querySelector(".error").style.display = "none";
   
  } 
}

  

searchBtn.addEventListener("click",()=>{
   checkWeather(searchBox.value);
})




