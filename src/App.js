import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodayTemp from './TodayTemp';
import TempInfo from './TempInfo';
import HourlyForecast from './HourlyForecast';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const loading = "Loading...";
  const [search,setSearch] = useState();
  const [query, setQuery] = useState("sialkot");

  const API_KEY = "46148db7c2fc9bcfe102cb9bbe007d9d";
  const API_LINK = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;
  const API_LINK_HOURLY = `http://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${API_KEY}`;

  const InputEvent = (e) => {
    setSearch(e.target.value);
  }
  // console.log(search);

  useEffect(() =>{
    const GetData = async () =>{
      try{
        const ApiResponse = await axios.get(API_LINK);
        const Api2Response = await axios.get(API_LINK_HOURLY);

        setData(ApiResponse.data);
        setHourlyData(Api2Response.data);
        
        setSearch('');
        setDataLoading(false);
      }catch(err){
        alert(`City Not Found!\n${err}`);
      }
    }
    GetData();
  }, [query])

  const GetResult = (e) => {
    if(search !== ''){
      setQuery(search);
    setSearch('');
    }else alert("First Enter City Name to Search");
    
  }

  if (dataLoading) {
    return(
      <>
      <div className="App">
            <div className="mt-5 d-flex justify-content-evenly">
              {loading}
            </div>
      </div>
      </>
    );
  }

  return(
    <>
    <div className="App">
      <div className="text-center my-4">
        <input
          type="text"
          placeholder="Search by City Name..."
          value={search}
          onChange={InputEvent}
          ></input>
          <button className="search-button" onClick={GetResult}>Search</button>
      </div>
      <div className="container-fluid mt-5">
        <div className="row today-block">
          <div className="col-6 text-center">
            <TodayTemp
              city = {data.name}
              country = {data.sys.country}
              date = {new Date(Date(data.dt)).toDateString()}
              iconCode = {data.weather[0].icon}
              temp = {Math.round((data.main.temp) - 273.15)}
              description = {data.weather[0].description}
            />
          </div>
          <div className="col-6 text-center">
            <TempInfo 
              high = {Math.round((data.main.temp_max) - 273.15)}
              low = {Math.round((data.main.temp_min) - 273.15)}
              wind = {data.wind.speed}
              clouds = {data.clouds.all}
              sunriseHours = {(new Date(data.sys.sunrise * 1e3).getHours()<10? '0':'') + new Date(data.sys.sunrise * 1e3).getHours()}
              sunriseMinutes = {(new Date(data.sys.sunrise * 1e3).getMinutes()<10? '0':'') + new Date(data.sys.sunrise * 1e3).getMinutes()}
              sunsetHours = {(new Date(data.sys.sunset * 1e3).getHours()<10? '0':'') + new Date(data.sys.sunset * 1e3).getHours()}
              sunsetMinutes = {(new Date(data.sys.sunset * 1e3).getMinutes()<10? '0':'') + new Date(data.sys.sunset * 1e3).getMinutes()}
            />
          </div>
        </div>

        <div className="row">
          <div className="mt-5 d-flex justify-content-evenly">
            <HourlyForecast
              time0 = {hourlyData.list[0].dt_txt}
              icon0 = {hourlyData.list[0].weather[0].icon}
              description0 = {hourlyData.list[0].weather[0].description}
              temp0 = {hourlyData.list[0].main.temp}

              time1 = {hourlyData.list[1].dt_txt}
              icon1 = {hourlyData.list[1].weather[0].icon}
              description1 = {hourlyData.list[1].weather[0].description}
              temp1 = {hourlyData.list[1].main.temp}

              time2 = {hourlyData.list[2].dt_txt}
              icon2 = {hourlyData.list[2].weather[0].icon}
              description2 = {hourlyData.list[2].weather[0].description}
              temp2 = {hourlyData.list[2].main.temp}

              time3 = {hourlyData.list[3].dt_txt}
              icon3 = {hourlyData.list[3].weather[0].icon}
              description3 = {hourlyData.list[3].weather[0].description}
              temp3 = {hourlyData.list[3].main.temp}

              time4 = {hourlyData.list[4].dt_txt}
              icon4 = {hourlyData.list[4].weather[0].icon}
              description4 = {hourlyData.list[4].weather[0].description}
              temp4 = {hourlyData.list[4].main.temp}
              
              time5 = {hourlyData.list[5].dt_txt}
              icon5 = {hourlyData.list[5].weather[0].icon}
              description5 = {hourlyData.list[5].weather[0].description}
              temp5 = {hourlyData.list[5].main.temp}

              time6 = {hourlyData.list[6].dt_txt}
              icon6 = {hourlyData.list[6].weather[0].icon}
              description6 = {hourlyData.list[6].weather[0].description}
              temp6 = {hourlyData.list[6].main.temp}

            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
}

export default App;
