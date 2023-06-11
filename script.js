
    document.addEventListener("DOMContentLoaded", () => {
      const apiKey = "b953fe13faf0152ce72130261b6e9289";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.getElementById("searchInput");
      const searchBtn = document.getElementById("submitButton");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        const data = await response.json();
        
        if(data.cod && data.cod === "404") {
            alert("City not found");
        }  
        
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = data.main.temp;
        document.querySelector('.windSpeed').textContent = data.wind.speed;
        document.querySelector('.humidity').textContent = data.main.humidity;
        document.querySelector('.pressure').textContent = data.main.pressure;

        if(data.main.temp > 20.0)
        {
          document.querySelector(".weatherImageSummer").style.display = "inline";
          document.querySelector(".weatherImageCloudy").style.display = "none";
          document.querySelector(".weatherImageRainy").style.display = "none";
        }
        else if(data.main.temp < 20.0 && data.main.temp > 0.0)
        {
          document.querySelector(".weatherImageCloudy").style.display = "inline";
          document.querySelector(".weatherImageSummer").style.display = "none";
          document.querySelector(".weatherImageRainy").style.display = "none";
        }
        else if(data.main.temp < 0.0 )
        {
          document.querySelector(".weatherImageRainy").style.display = "inline";
          document.querySelector(".weatherImageCloudy").style.display = "none";
          document.querySelector(".weatherImageSummer").style.display = "none";
        }
        console.log(data);
      }

      searchBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        const city = searchBox.value;
        checkWeather(city);
      });

      const defaultCity = 'bengaluru';
      checkWeather(defaultCity);



    });
