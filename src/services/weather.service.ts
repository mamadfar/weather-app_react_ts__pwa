import axios from "axios";

export const getWeatherService = (query: string, units="metric") => {
    return axios.get(process.env.REACT_APP_URL, {
        params: {
            q: query,
            units,
            APPID: process.env.REACT_APP_API_KEY
        }
    })
};
