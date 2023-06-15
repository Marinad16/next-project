import React from "react";
import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
import BabyFit from "../../../public/baby-fit.jpg"

const projects = [
    {
        id: 1,
        slug: "perfect-baby-fit",
        title: "Perfect Baby Fit",
        about: "React project for choosing the perfect size of clothes for a child. Develop complicated filters with different params, multilingual, pagination",
        link: "#",
        technologies: "React, React Router, Redux, Redux Saga, i18n, SCSS, REST API, Swagger, Figma",
        image: "../../../public/baby-fit.jpg"
    },
    {
        id: 2,
        slug: "onlime-store",
        title: "Onlime store",
        about: "Online store of digital equipment and gadgets. Develop products compare table, basket, theme change",
        link: "#",
        technologies: "Laravel blades, jQuery, SCSS, Alpine.js, AJAX.",
        image: "onlime.png"
    },
    {
        id: 3,
        slug: "svitanok",
        title: "Svitanok juice",
        about: "Landing for juice company with cute animation.",
        link: "http://www.svitanok-juice.com.ua/",
        technologies: "Laravel blades, jQuery, SCSS.",
        image: "svitanok.png"
    },
    {
        id: 4,
        slug: "code-of-the-nation",
        title: "Code of the nation",
        about: "Website for the charitable fund Code of the nation.",
        link: "https://code-of-nation.org.ua/",
        technologies: "Laravel blades, jQuery, SCSS, AJAX, Leaflet.js.",
        image: "kod-of-nation.png"
    },
    {
        id: 5,
        slug: "harvest-victory",
        title: "Harvest victory",
        about: "Website for the charitable fund Victory harvest. ",
        link: "https://victoryharvest.com.ua/",
        technologies: "Laravel blades, jQuery, SCSS, AJAX.",
        image: "harvest.png"
    },
    {
        id: 6,
        slug: "download-center",
        title: "Download Center",
        about: "Download Center for IEC Telecom company.",
        link: "https://downloadcenter.iec-telecom.com/",
        technologies: "Laravel blades, jQuery, SCSS, AJAX.",
        image: "download-center.png"
    },
]

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h1>My Works</h1>
            <div className={styles.list}>
                {projects.map(project => (
                    <Link href={`/portfolio/${project.slug}`} className={styles.item} key={project.slug}>
                        <Image src={BabyFit} className={styles.image} alt={project.title}/>
                        <h3 className={styles.title}>Project</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;