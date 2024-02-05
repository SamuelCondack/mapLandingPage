import styles from "./Pics.module.css"
import firstContent from '../../assets/firstContent.webp'
import secondContent from '../../assets/secondContent.webp'
import thirdContent from '../../assets/thirdContent.webp'

export default function Pics() {

    return (
        <>
            <img src={firstContent} className={styles.contents} alt="firstContent" />
            <img src={secondContent} className={styles.contents} alt="secondContent" />
            <img src={thirdContent} className={styles.contents} alt="thirdContent" />
        </>
    )
}