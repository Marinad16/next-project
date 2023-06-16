"use client"
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import {projects} from "@/app/portfolio/data";
import {notFound} from "next/navigation";

const getData = (slug) => {
    const data = projects

    if (data) {
        return data.find((project) => project.slug === slug);
    }

    return notFound()
}

const Project = ({params}) => {
    const project = getData(params.project)

    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>{project.title}</h1>
                <h3>About</h3>
                <p>{project.about}</p>
                <h3>Technologies</h3>
                <p>{project.technologies}</p>
                <Link className={styles.link} href={project.link}>Go to website</Link>
            </div>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={project.image} width={1200} height={600} alt=""/>
                <Image className={styles.imageMobile} src={project.imageMobile} width={600} height={1200} alt=""/>
            </div>
        </div>
    )
}

export default Project;