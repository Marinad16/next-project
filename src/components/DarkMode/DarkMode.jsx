"use client"

import React, {useContext} from "react";
import styles from "./darkMode.module.scss";
import MoonIcon from "@/components/icons/Moon";
import SunIcon from "@/components/icons/Sun";
import {ThemeContext} from "../../../context/ThemeContext";

const DarkMode = () => {
    const {toggleMode, mode} = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggleMode}>
            <MoonIcon className={styles.icon}/>
            <SunIcon className={styles.icon}/>
            <div className={styles.ball}
                 style={mode === "light" ? {left: "2px"} : {right: "2px"}}></div>
        </div>
    )
}

export default DarkMode;