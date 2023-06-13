import Image from "next/image";
import HomeImage from "../../public/home.png"
import styles from "./page.module.scss"
import Button from "@/components/Button/Button";

export default function Home() {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda cum dolorem ea eveniet
                    magnam magni molestiae nemo perspiciatis repudiandae?</p>
                <Button url="/profile" text="See works"/>
            </div>
            <div>
                <Image className={styles.image} src={HomeImage}/>
            </div>
        </div>
    )
}
