"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from './clock.module.css';
import lockIcon from '@/public/ui/lock-solid.svg';

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

    var sharedDate = props.sharedDate[1] + ' ' + props.sharedDate[0] + ' de ' + props.sharedDate[2] + ', ' + props.sharedDate[3];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.lockIconContainer}>
                    <Image className={styles.lockIcon} src={lockIcon} alt="" />
                </div>
                <h1 className={styles.time}>{time.join(':')}</h1>
                <h6 className={styles.date}>{sharedDate}</h6>
            </div>
        </div>
    );
}

export default Clock;