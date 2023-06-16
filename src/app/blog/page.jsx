import React from "react";
import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        cache: "no-store",
        }
    )
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}

const Blog = async () => {
    const data = await getData();

    return (
        <div className={styles.container}>
            <h1>Blog</h1>
            <div className={styles.listContainer}>
                {data.map(item => (
                    <Link href="/blog/id" className={styles.item} key={item.id}>
                        <div className={styles.imageContainer}>
                            <Image src="https://picsum.photos/200/300" width={400} height={300} alt=""/>
                        </div>
                        <div className={styles.details}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog;