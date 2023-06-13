import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import GitHabIcon from "@/components/icons/GitHabIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rights}>@2023
                <a href="https://github.com/Marinad16/next-project"> Marina</a>
                . All rights reserved.</div>
            <div className={styles.socials}>
                <Link className={styles.socialLink} href="https://github.com/Marinad16">
                    <GitHabIcon/>
                </Link>
                <Link className={styles.socialLink} href="https://www.linkedin.com/in/marina-dubyna/">
                    <LinkedInIcon/>
                </Link>
                <Link className={styles.socialLink} href="https://t.me/marinadubyna">
                    <TelegramIcon/>
                </Link>
            </div>
        </div>
    )
}

export default Footer;