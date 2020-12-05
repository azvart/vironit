import axios from 'axios';
let url = 'https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json'

const key ='7c3abb12516de300f37e46ca3c3f1833';

const getCity= async ()=>{
    try{
        const result = await axios.get(url)
        let res = result.data[0];
        console.log(res.regions); 
        viewCity(res.regions);
        
    } catch (e){
        console.error(e);
    }
}
const viewCity = (data)=>{
    let select = document.getElementById('citySelect');

    data.map((e)=>{
            e.cities.map(t=>{
                select.innerHTML += `<option>${t.name}</option>`
            });
    });
    

    const getCurrentWeather = async () =>{
             const url =`https://api.openweathermap.org/data/2.5/weather?q=${select.value}&exclude=daily&appid=${key}`;
            try{
                const Weather = await axios.get(url);
                console.log(Weather.data);
                dailyWeather(Weather.data);
                view(Weather.data);
            } catch (e){
                console.error(e);
            }
    }
    select.addEventListener('click',getCurrentWeather);
}
getCity();
// /* 
// Отображение данных 
// */
const view = (data)=>{
    if(data.weather[0].main === 'Snow' || data.weather[0].main === 'light snow' ){
        views.style.cssText = 'background: url(./img/cold.jpg);background-attachment: fixed;background-repeat: no-repeat;background-size: cover;';
    }else{
        views.style.cssText = 'background: url(./img/app.jpg);background-attachment: fixed;background-repeat: no-repeat;background-size: cover;';
    }
let title = Array.from(document.getElementsByClassName('title'))[0];
let gradus = Array.from(document.getElementsByClassName('gradus'))[0];
let feel = Array.from(document.getElementsByClassName('feel'))[0];
let weather = Array.from(document.getElementsByClassName('weather-info'))[0];
let time = Array.from(document.getElementsByClassName('time'))[0]


title.textContent = data.name;
gradus.textContent = `${Math.floor(data.main.temp - 273.15)}°C` ;
feel.textContent = `Feels like: ${Math.floor(data.main.feels_like - 273.15)}°C`;
weather.textContent = data.weather[0].main;
time.textContent = String(new window.Date()).slice(3, 15);

}
// /*
// недельный прогноз
// */
const viewDaily = (data)=>{
    console.log(data);
    let more = Array.from(document.getElementsByClassName('weather-daily-info'))[0];
    more.classList.add('pad');
    while(more.hasChildNodes())
    {
       more.removeChild(more.lastChild);
    }
    for(let i = 0; i < data.daily.length; i++){

        let datetime = document.createElement('h3');
        datetime.textContent = String(new Date(data.daily[i].dt * 1000)).slice(3,15);
        let gradus = document.createElement('p');
        gradus.textContent =`${Math.floor(data.daily[i].temp.day - 273.15)}°C`;
        let weather = document.createElement('p');
        weather.textContent = data.daily[i].weather[0].description;
        
        let div = document.createElement('div');
        
        div.appendChild(datetime);
        div.appendChild(gradus);
        div.appendChild(weather);
      
        more.appendChild(div);
      
        
    }
}
// /* 
// Получаем данные для недельного прогноза
// */
const dailyWeather= async (data)=>{
    const url_daily = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=alerts&appid=${key}`;
    try{
    const daily = await axios.get(url_daily);
    let res = daily.data;
    
    viewDaily(res); // отображаем данные
    } catch (e) {
        console.error(e);
    }
}



let views = Array.from(document.getElementsByClassName('view-info'))[0];














