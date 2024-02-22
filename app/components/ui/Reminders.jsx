'use client';
import { useRef, useEffect } from 'react';
import styles from './reminders.module.css';

function Reminders() {
    const reminder_task_ref_1 = useRef(null);
    const reminder_task_ref_2 = useRef(null);
    const reminder_task_ref_3 = useRef(null);
    const reminder_task_ref_4 = useRef(null);

    useEffect( () => {
        var tasks = [reminder_task_ref_1.current, reminder_task_ref_2.current, reminder_task_ref_3.current, reminder_task_ref_4.current];

        tasks.forEach( element => {
            element.addEventListener('click', () => {
                if(element.checked){
                    console.log('El elemento: ' + element.value + ' fue chequeado');
                } else {
                    console.log('El elemento: ' + element.value + ' no está chequeado');
                }
            })
        });
    }, [])

    return (
        <div className='widget-container'>
            <div className={styles.content}>
                <h4 className={styles.title}>Recordatorios</h4>
                <ul className={styles.list}>
                    <li className={styles.item}><input ref={reminder_task_ref_1} id='reminder-task_1' className={styles.check} type='checkbox' value='limpieza' /> <label htmlFor='reminder-task_1'>Limpieza diaria de la habitación</label></li>
                    <li className={styles.item}><input ref={reminder_task_ref_2} id='reminder-task_2' className={styles.check} type='checkbox' value='lavar_ropa' /> <label htmlFor='reminder-task_2'>Lavar la ropa</label></li>
                    <li className={styles.item}><input ref={reminder_task_ref_3} id='reminder-task_3' className={styles.check} type='checkbox' value='programar' /> <label htmlFor='reminder-task_3'>Programar</label></li>
                    <li className={styles.item}><input ref={reminder_task_ref_4} id='reminder-task_4' className={styles.check} type='checkbox' value='alimentar_gato' /> <label htmlFor='reminder-task_4'>Alimentar al gato</label></li>
                </ul>
            </div>
        </div>
    );
}

export default Reminders;