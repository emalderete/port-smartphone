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
    return (
        <div className='widget-container'>
            <h4 className={styles.city}>{city}</h4>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={weatherStatus(status)} alt="" />
                    </div>
                </div>
                <div className={styles.inner}>
                    <h2 className={styles.temp}>{parseInt(temp)}</h2>
                </div>
            </div>
        </div>
    );
}

export default Weather;