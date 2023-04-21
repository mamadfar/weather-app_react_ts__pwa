import React from 'react';
import useWeather from "../hooks/useWeather";
import Search from "./components/Search";
import Weather from "./components/Weather";

const Home = () => {

    const {query, setQuery, weather, searchHandler} = useWeather();

    return (
        <>
            <Search query={query} setQuery={setQuery} searchHandler={searchHandler}/>
            {weather?.main && <Weather weather={weather}/>}
        </>
    );
};

export default Home;
