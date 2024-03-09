'use client';
import Image from "next/image";
import twilightBG from "@/public/ui/twilight-bg.jpg";
import Clock from "./Clock";
import Reminders from "./Reminders";
import Notifications from "./Notifications";
import CurrentDate from "./CurrentDate";
import Weather from "./Weather";
import chevronUp from "@/public/ui/chevron-up.svg";
import batFull from "@/public/ui/battery-full-solid.svg";
import wifiIcon from "@/public/ui/signal.svg";
import styles from './lockscreen.module.css';
import { useState, useRef, useEffect } from "react";

function Lockscreen() {
    const [sharedDate, setSharedDate] = useState([]);
    const swipeRef = useRef(null);
    const swipe = swipeRef.current;

    useEffect(()=>{
        // Función de deslizar
        let isAnimating = false;
        let pullDeltaY = 0;

        function startDrag(event){
            if(isAnimating) {
                return
            } else {
                const swipeButton = event.target(swipeRef.current);
                console.log(event);
            }
        }
    }, []);

    

    return (
        <div className={styles.lockscreen}>
            <Image className={styles.lockscreen_bg} src={twilightBG} alt="alt" width={3000} height={2000} />
            <div className={styles.overlay}>
                <aside className={styles.aside}>
                    <Reminders></Reminders>
                    <CurrentDate setSharedDate={setSharedDate}></CurrentDate>
                    <Weather></Weather>
                </aside>
                <div className={styles.content}>
                    <div className={styles.toolbarArea}>
                        <div className={styles.toolbar}>
                            <div className={styles.wifiContainer}>
                                <Image className={styles.wifi} src={wifiIcon} alt="" />
                            </div>
                            <div className={styles.batteryContainer}>
                                <Image className={styles.batteryImg} src={batFull} alt="" />
                                <h6 className={styles.batteryText}>100%</h6>
                            </div>
                        </div>
                    </div>
                    <div className={styles.clockSpace}>
                        <Clock sharedDate={sharedDate}></Clock>
                    </div>
                    <div className={styles.notificationArea}>
                        <Notifications></Notifications>
                    </div>
                    <div className={styles.swipeArea}>
                        <div className={styles.swipeContent} ref={swipeRef} onClick={()=>{console.log('Inició el errastre')}}>
                            <Image className={styles.swipeChevron} src={chevronUp} alt="" />
                            <span className={styles.swipeLegend}>Deslizar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lockscreen;