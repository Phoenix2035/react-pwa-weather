import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "44b1fe8a6c0207544cdd674445971577";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY
        }
    })

    return data
}