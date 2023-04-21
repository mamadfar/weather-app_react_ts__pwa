import React, {FC} from 'react';
import {IUseWeatherReturn} from "../../types/weather.type";

const Weather:FC<Pick<IUseWeatherReturn, "weather">> = ({weather}) => {
    const {name, sys, main, weather: innerWeather} = weather;
    return (
        <div className="city">
            <h2 className="city-name">
                <span>{name}</span>
                <sup>{sys?.country}</sup>
            </h2>
            <div className="city-temp">
                {Math.round(main?.temp)}
                <sup>&deg;C</sup>
            </div>
            <div className="info">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${innerWeather[0]?.icon}@2x.png`} alt={innerWeather[0]?.description}/>
                <p>{innerWeather[0]?.description}</p>
            </div>
        </div>
    );
};

export default Weather;
