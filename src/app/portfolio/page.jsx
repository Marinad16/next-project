import React from "react";
import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
import {projects} from "@/app/portfolio/data";
import {notFound} from "next/navigation";

const getData = () => {
    const data = projects

    if (data) {
        return data
    }

    return notFound()
}

const Portfolio = () => {
    const data = getData()
    return (
        <div className={styles.container}>
            <h1>My Works</h1>
            <div className={styles.list}>
                {data.map(project => (
                    <Link href={`/portfolio/${project.slug}`} className={styles.item} key={project.slug}>
                        <Image src={project.image} className={styles.image} alt={project.title} width={1200} height={600}/>
                        <h3 className={styles.title}>{project.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;