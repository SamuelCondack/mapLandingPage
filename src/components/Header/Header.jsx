import mapLogo from "../../assets/mapLogo.webp"
import styles from "./Header.module.css"
import whiteMenu from "../../assets/whiteMenu.png"
import xIcon from "../../assets/xIcon.png"

function Header() {
    function mobileFlex() {
        let mobileMenu = document.getElementById("mobileMenu")
        mobileMenu.style.display = "flex"
    }
    function mobileNone() {
        let mobileMenu = document.getElementById("mobileMenu")
        mobileMenu.style.display = "none"
    }

    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.mobileMenu} id="mobileMenu">
                    <div className={styles.mobileLinks}>
                        <a href="home" className={styles.links}>Home</a>
                        <a href="quem somos" className={styles.links}>Quem Somos?</a>
                        <a href="serviços" className={styles.links}>Serviços</a>
                        <a href="produtos" className={styles.links}>Produtos</a>
                        <a href="parceiros" className={styles.links}>Parceiros</a>
                        <a href="contato" className={styles.links}>Contato</a>
                    </div>
                    <img onClick={mobileNone} id="xIcon" className={styles.xIcon} src={xIcon} alt="x icon" />
                </div>
                <a href="/"><img src={mapLogo} alt="logo" className={styles.headerLogo} /></a>
                <ul className={styles.ulLinks} id="ulLinks">
                    <li><a href="home" className={styles.links}>Home</a></li>
                    <li><a href="quem somos" className={styles.links}>Quem Somos?</a></li>
                    <li><a href="serviços" className={styles.links}>Serviços</a></li>
                    <li><a href="produtos" className={styles.links}>Produtos</a></li>
                    <li><a href="parceiros" className={styles.links}>Parceiros</a></li>
                    <li><a href="contato" className={styles.links}>Contato</a></li>
                </ul>
                <img onClick={mobileFlex} className={styles.whiteMenu} src={whiteMenu} alt="white menu" />
            </div>
        </>
    )
}

export default Header