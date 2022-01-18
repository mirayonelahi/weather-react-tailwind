import './styles/output.css';
import Search from './components/Search';
import Forecast from './components/Forecast';
import { useEffect, useState } from 'react';

function App() {
	const [ weatherInfo, setWeeatherInfo ] = useState();
  let flag= true
  let vall=""
  const [ val, setVal ] = useState("");

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/forecast?q=toronto&cnt=40&units=metric&id=524901&appid=766db8f49178aea9c71861d3eca6be91'
		)
			.then((response) => response.json())
			.then((response) =>{
        console.log(response);
				setWeeatherInfo(
					response.list.map((detailsForecast) => {
            if(flag){
              vall=(detailsForecast.dt_txt).substring(8,11)
             // setVal((detailsForecast.dt_txt).substring(8,11))
             // console.log((detailsForecast.dt_txt).substring(8,11));
              flag=false
              return {
              };
  
            }
           
           else if( (detailsForecast.dt_txt).substring(8,11)===vall){
                console.log("value  "+vall);
                return {
                };
    
                
                
           }
           else{
           flag=true
            return {
              date:  (detailsForecast.dt_txt).substring(0,10),
							temp: detailsForecast.main.temp,
              icon: detailsForecast.weather[0].icon,
              description: detailsForecast.weather[0].description
              
            };

           }
						// return {
              // date:  (detailsForecast.dt_txt).substring(0,10),
							// temp: detailsForecast.main.temp,
              // icon: detailsForecast.weather[0].icon,
              // description: detailsForecast.weather[0].description
              
						// };
					})
				)}
			);
	}
  , []);

	return (
		<div className="bg-gray-200 h-screen flex flex-col items-center">
		
      {console.log(weatherInfo)}
			<Search />
      <div className="flex flex-row p-4">

			{!!weatherInfo &&  weatherInfo.map((i, index) => (
				<div key={index}>
          {  !!i.temp &&
          	<Forecast temp={i.temp} icon={i.icon} description={i.description} date={i.date} />
          }
				
				</div>
			))}
      </div>
		</div>
	);
}

export default App;
