import React from 'react'

const Forecast = ({temp, icon , description, date}) => {
    return (
    <>
        <div className="gap-28 p-6 m-4">
             <div> {date}</div>
            <div>Temp: {temp}</div>
            <div> <img className="mx-auto" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon} /> </div>
            <div>{description}</div>
        </div>
        </>
    )
 
}

export default Forecast
