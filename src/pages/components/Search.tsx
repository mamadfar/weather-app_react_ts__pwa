import {FC} from 'react';
import Input from "../../components/Input";
import {IUseWeatherReturn} from "../../types/weather.type";
import "./Search.scss";

const Search:FC<Omit<IUseWeatherReturn, "weather">> = ({query, setQuery, searchHandler}) => {
    return (
        <Input type="text" className="search" placeholder="Search..." value={query}
               onChange={e => setQuery(e.target.value)} onKeyDown={e => searchHandler(e)}/>
    );
};

export default Search;
