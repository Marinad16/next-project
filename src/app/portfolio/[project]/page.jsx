import React from "react";
import styles from "@/app/about/page.module.scss";
import Link from "next/link";
import Image from "next/image";

const Project = ({params}) => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>{params.project}</h1>
                <p>"React project for choosing the perfect size of clothes for a child. Develop complicated filters with different params, multilingual, pagination</p>
                <p>React, React Router, Redux, Redux Saga, i18n, SCSS, REST API, Swagger, Figma</p>
                {/*<Link href={params.link}>Go to website</Link>*/}
            </div>
            {/*<div>*/}
            {/*    <Image src={params.image}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default Project;