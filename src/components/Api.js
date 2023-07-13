import axios from "axios";
export const getWeather = async (input) => {
        const weather = await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${input}&apikey=${process.env.REACT_APP_APIKey}`)
        return weather.data
}