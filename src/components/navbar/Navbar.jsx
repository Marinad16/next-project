import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";

const links = [
    {
        id: 1,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 1,
        title: "About",
        url: "/about"
    },
    {
        id: 1,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 1,
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
                    <Link href={link.url} key={link.id}>{link.title}</Link>
                ))}
            </div>
            <button className={styles.logout}>
                Log out
            </button>
        </div>
    )
}

export default Navbar;