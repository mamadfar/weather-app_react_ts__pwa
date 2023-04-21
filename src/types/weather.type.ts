import {KeyboardEvent} from "react";

export interface IUseWeatherReturn {
    query: string;
    setQuery: (query: string) => void;
    searchHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
    weather: unknown;
}
