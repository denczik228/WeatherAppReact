import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import five from '../json/Five.json';
import './WeekWeather.css';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

const WeekWeather = (props) => {
    const [currentWeather, setCurrentWeather] = useState([]);
    const { cityKey } = useContext(AppContext);

    useEffect(() => {
        getCurrentWeatherOfWeek(cityKey)
    }, [cityKey])

    const getCurrentWeatherOfWeek = (key) => {
        // fetch(`${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setCurrentWeather(data)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        setCurrentWeather(five.DailyForecasts);
    }

    if (currentWeather.length === 0) return null;

    return (
        <div className='WeekWeather'>
            {
                currentWeather.map((item, index) => {
                    return (
                        <>
                            <div key={item.Key} className='container'>
                                <p>{currentWeather[index].Date}</p>
                                <p>{currentWeather[index].Temperature.Minimum.Value + ' ' + currentWeather[index].Temperature.Minimum.Unit}</p>
                                <p>{currentWeather[index].Temperature.Maximum.Value + ' ' + currentWeather[index].Temperature.Maximum.Unit}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default WeekWeather