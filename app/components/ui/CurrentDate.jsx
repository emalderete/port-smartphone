"use client";
import { useState, useEffect } from 'react';
import styles from './currentdate.module.css';

function CurrentDate() {
    const [date, setDate] = useState([]);

    useEffect(()=>{
        function currentDate() {
            let currentDate = new Date();
            let currentDay = currentDate.getDate();
            let currentDayWeek = currentDate.getDay();
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();
            const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            currentDayWeek = daysOfWeek[currentDayWeek];
            currentMonth = monthsOfYear[currentMonth];

            if (currentDay < 10) {
                currentDay = '0' + currentDay;
            }

            var dateArray = [currentDay, currentDayWeek, currentMonth, currentYear];

            if (date !== dateArray) {
                setDate(dateArray);
            }
        }

        currentDate();

        const updateInterval = setInterval((currentDate), 1000);

        return () => {clearInterval(updateInterval)}
    }, []);

    return (
        <div className={`widget-container ${styles.container}`}>
            <div className={styles.dayContainer}>
                <h2 className={styles.dayC}>{date[0]}</h2>
                <h4 className={styles.dayS}>{date[1]}</h4>
            </div>
            <div className={styles.monthContainer}>
                <h4 className={styles.month}>{date[2]}</h4>
                <h4 className={styles.year}>{date[3]}</h4>
            </div>
        </div>
    );
}

export default CurrentDate;