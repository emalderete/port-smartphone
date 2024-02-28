'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './weather.module.css';
import cloudImg from '@/public/ui/weather/cloud-solid.svg';
import heavyRainImg from '@/public/ui/weather/cloud-showers-heavy-solid.svg';
import rainImg from '@/public/ui/weather/cloud-rain-solid.svg';
import thunderImg from '@/public/ui/weather/cloud-bolt-solid.svg';
import snowImg from '@/public/ui/weather/snowflake-regular.svg';
import fogImg from '@/public/ui/weather/smog-solid.svg';
import cloudSunImg from '@/public/ui/weather/cloud-sun-solid.svg';
import sunImg from '@/public/ui/weather/sun-solid.svg';

function Weather() {
    const [temp, setTem] = useState();
    const [city, setCity] = useState();
    const [status, setStatus] = useState();
    const [weatherAvailable, setWeatherAvailable] = useState();

    useEffect(()=>{
    let domain = window.location.origin;
    let api = domain + '/api/weather';

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(location => {
            var lat = location.coords.latitude;
            var lon = location.coords.longitude;

            fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'latitude': lat,
                    'longitude': lon
                })
            })
            .then(response => response.json())
            .then(dataJson => {
                setTem(dataJson.data.main.temp);
                setCity(dataJson.data.name);
                setStatus(dataJson.data.weather[0].id);
            })
            setWeatherAvailable(true);
        }, (error) => {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    setWeatherAvailable(false);
                    break;
                case error.POSITION_UNAVAILABLE:
                    setWeatherAvailable(false);
                    break;
                case error.UNKNOWN_ERROR:
                    setWeatherAvailable(false);
                    break;
                case error.TIMEOUT:
                    setWeatherAvailable(false);
                    break;
            }
        })
    } else {
        console.log('Navegador no compatible con la geolocalización.')
    }
}, []);

    function weatherStatus(id){
        if(id >= 200 && id <= 232) {
            return thunderImg;
        } else if(id >= 300 && id <= 321) {
            return rainImg;
        } else if(id >= 500 && id <= 531) {
            return heavyRainImg;
        } else if(id >= 600 && id <= 622) {
            return snowImg;
        } else if(id >= 701 && id <= 781) {
            return fogImg;
        } else if(id === 800) {
            return sunImg;
        } else if(id === 801) {
            return cloudSunImg;
        } else if(id >= 802 && id <= 804) {
            return cloudImg;
        }
    }

    return (
        <div className='widget-container'>
            <h4 className={styles.city}>{weatherAvailable ? city : 'Clima de tu ciudad no disponible'}</h4>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={weatherStatus(status)} alt="" />
                    </div>
                </div>
                <div className={styles.inner}>
                    <h2 className={styles.temp}>{weatherAvailable ? parseInt(temp) + '°' : ''}</h2>
                </div>
            </div>
        </div>
    );
}

export default Weather;