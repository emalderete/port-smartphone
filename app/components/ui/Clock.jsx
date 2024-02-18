"use client";
import { useState, useEffect } from 'react';
import styles from './clock.module.css';

function Clock() {
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

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.time}>{time.join(':')}</h1>
            </div>
        </div>
    );
}

export default Clock;