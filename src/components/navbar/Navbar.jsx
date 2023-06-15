import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import DarkMode from "@/components/DarkMode/DarkMode";

const links = [
    {
        id: 1,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 2,
        title: "About",
        url: "/about"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "Contacts",
        url: "/contact"
    },
]


const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Marina</Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link href={link.url} key={link.id} rel="preload">{link.title}</Link>
                ))}
            </div>
            <div className={styles.container}>
                <button className={styles.logout}>
                    Log out
                </button>
                <DarkMode/>
            </div>
        </div>
    )
}

export default Navbar;