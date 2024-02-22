import styles from './currentdate.module.css';

function CurrentDate() {
    return (
        <div className={`widget-container ${styles.container}`}>
            <div className={styles.dayContainer}>
                <h2 className={styles.dayC}>22</h2>
                <h4 className={styles.dayS}>Jueves</h4>
            </div>
            <div className={styles.monthContainer}>
                <h4 className={styles.month}>Febrero</h4>
                <h4 className={styles.year}>2024</h4>
            </div>
        </div>
    );
}

export default CurrentDate;