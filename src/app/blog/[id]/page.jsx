import React from "react";
import styles from "./page.module.scss"
import Image from "next/image";
import {notFound} from "next/navigation";

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            cache: "no-store",
        }
    )
    if (!res.ok) {
        return notFound()
    }
    return res.json();
}

const Post = async ({params}) => {
    const data = await getData(params.id)
    return (
        <div className={styles.container}>
            <h1>{data.title}</h1>
            <div className={styles.postContainer}>
                <div className={styles.imageContainer}>
                    <Image src="https://picsum.photos/200/300" fill={true} alt=""/>
                </div>
                <div>{data.body}</div>
            </div>
        </div>
    )
}

export default Post;