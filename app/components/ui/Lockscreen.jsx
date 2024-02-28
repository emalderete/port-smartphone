import Image from "next/image";
import twilightBG from "@/public/ui/twilight-bg.jpg";
import Clock from "./Clock";
import Reminders from "./Reminders";
import Notifications from "./Notifications";
import CurrentDate from "./CurrentDate";
import Weather from "./Weather";
import styles from './lockscreen.module.css';

function Lockscreen() {
    return (
        <div className={styles.lockscreen}>
            <Image className={styles.lockscreen_bg} src={twilightBG} alt="alt" width={3000} height={2000} />
            <div className={styles.overlay}>
                <aside className={styles.aside}>
                    <Reminders></Reminders>
                    <CurrentDate></CurrentDate>
                    <Weather></Weather>
                </aside>
                <div className={styles.content}>
                    <div className={styles.clockSpace}>
                        <Clock></Clock>
                    </div>
                    <div className={styles.notificationArea}>
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lockscreen;