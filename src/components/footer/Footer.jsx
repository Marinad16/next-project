import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rights}>@2023
                <a href="https://github.com/Marinad16/next-project"> Marina</a>
                . All rights reserved.</div>
            <div>Socials</div>
        </div>
    )
}

export default Footer;