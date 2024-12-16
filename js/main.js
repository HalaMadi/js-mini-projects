const apiKey = '4e653c79ef94bfc4b1ee8c2e841d22fc'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`)
    const data = await response.json();
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
}
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
searchBtn.addEventListener('click',()=>{checkWeather(searchBox.value)})
