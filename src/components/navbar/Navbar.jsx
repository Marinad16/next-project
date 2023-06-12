import React from "react";
import Link from "next/link";

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
        <div>
            <Link href="/">Marina</Link>
            <div>
                {links.map((link) => (
                    <Link href={link.url} key={link.id}>{link.title}</Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar;