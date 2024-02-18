import Image from "next/image";
import TwilightBG from '../../../public/ui/twilight-bg.jpg'
import styles from './lockscreen.module.css';

function Lockscreen() {
    return (
        <div className={styles.lockscreen}>
            <Image className={styles.lockscreen_bg} src={TwilightBG} alt="alt" width={3000} height={2000} />
            <div className={styles.overlay}>

            </div>
        </div>
    );
}

export default Lockscreen;