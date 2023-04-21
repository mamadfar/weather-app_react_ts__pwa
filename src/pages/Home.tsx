import React from 'react';
import useWeather from "../hooks/useWeather";
import Search from "./components/Search";

const Home = () => {

    const {query, setQuery, weather, searchHandler} = useWeather();

    return (
        <>
            <Search query={query} setQuery={setQuery} searchHandler={searchHandler}/>
        </>
    );
};

export default Home;
