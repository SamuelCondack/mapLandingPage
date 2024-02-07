import styles from "./Pics.module.css"
import firstContent from '../../assets/firstContent.webp'
import secondContent from '../../assets/secondContent.webp'
import thirdContent from '../../assets/thirdContent.webp'
import firstMobile from '../../assets/mobileImages/firstMobile.webp'
import secondMobile from '../../assets/mobileImages/secondMobile.webp'
import thirdMobile from '../../assets/mobileImages/thirdMobile.webp'

export default function Pics() {

    return (
        <>
            <img src={screen.width < 751 ? firstMobile : firstContent} className={styles.contents} alt="firstContent" />
            <img src={screen.width < 751 ? secondMobile : secondContent} className={styles.contents} alt="secondContent" />
            <img src={screen.width < 751 ? thirdMobile : thirdContent} className={styles.contents} alt="thirdContent" />
        </>
    )
}