import Image from "next/image";
import TwilightBG from '../../../public/ui/twilight-bg.jpg';
import Clock from "./Clock";
import Reminders from "./Reminders";
import styles from './lockscreen.module.css';

function Lockscreen() {
    return (
        <div className={styles.lockscreen}>
            <Image className={styles.lockscreen_bg} src={TwilightBG} alt="alt" width={3000} height={2000} />
            <div className={styles.overlay}>
                <aside className={styles.aside}>
                    <Reminders></Reminders>
                </aside>
                <div className={styles.content}>
                    <div className={styles.clockSpace}>
                        <Clock></Clock>
                    </div>
                    <div className={styles.notificationArea}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lockscreen;