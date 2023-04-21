import {KeyboardEvent, useState} from 'react';
import {IUseWeatherReturn} from "../types/weather.type";
import {getWeatherService} from "../services/weather.service";

const UseWeather: () => IUseWeatherReturn = () => {
    const [query, setQuery] = useState<string>("");
    const [weather, setWeather] = useState<unknown>({});

    const searchHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            try {
                const {data} = await getWeatherService(query);
                setWeather(data);
                setQuery("");
            } catch (e) {
                console.log(e);
            }
        }
    }

    return {query, setQuery, weather, searchHandler};
};

export default UseWeather;
