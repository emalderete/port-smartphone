"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './clock.module.css';
import cloudImg from '@/public/ui/weather/cloud-solid.svg';
import heavyRainImg from '@/public/ui/weather/cloud-showers-heavy-solid.svg';
import rainImg from '@/public/ui/weather/cloud-rain-solid.svg';
import thunderImg from '@/public/ui/weather/cloud-bolt-solid.svg';
import snowImg from '@/public/ui/weather/snowflake-regular.svg';
import fogImg from '@/public/ui/weather/smog-solid.svg';
import cloudSunImg from '@/public/ui/weather/cloud-sun-solid.svg';
import sunImg from '@/public/ui/weather/sun-solid.svg';

function Clock(props) {
    const [time, setTime] = useState([]);

    useEffect(()=>{
        // Lógica del reloj
        function currentTime() {
            const currentDate = new Date();
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();

            if(hours < 10) {
                var hours = '0' + hours;
            }
            if(minutes < 10) {
                var minutes = '0' + minutes;
            }
            var timeArray = [hours, minutes];

            if(JSON.stringify(time) !== JSON.stringify(timeArray)){
                setTime(timeArray);
            }
        }

        currentTime();

        const updateInterval = setInterval((currentTime), 1000);

        return () => {clearInterval(updateInterval)}
    }, [time]);

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

    var sharedDate = props.sharedDate[1] + ' ' + props.sharedDate[0] + ' de ' + props.sharedDate[2] + ', ' + props.sharedDate[3];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.weather}>
                    <Image className={styles.weatherStatus} src={sunImg} alt="" />
                    <h6 className={styles.temp}>{}°</h6>
                </div>
                <h1 className={styles.time}>{time.join(':')}</h1>
                <h6 className={styles.date}>{sharedDate}</h6>
            </div>
        </div>
    );
}

export default Clock;