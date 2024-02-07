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
                        <a href="#" className={styles.links}>Home</a>
                        <a href="https://mapmarketplaces.com/quem-somos/" className={styles.links}>Quem Somos?</a>
                        <a href="https://mapmarketplaces.com/servicos/" className={styles.links}>Serviços</a>
                        <a href="https://mapmarketplaces.com/produtos/" className={styles.links}>Produtos</a>
                        <a href="https://mapmarketplaces.com/parceiros/" className={styles.links}>Parceiros</a>
                        <a href="https://mapmarketplaces.com/contato/" className={styles.links}>Contato</a>
                    </div>
                    <img onClick={mobileNone} id="xIcon" className={styles.xIcon} src={xIcon} alt="x icon" />
                </div>
                <a href="/"><img src={mapLogo} alt="logo" className={styles.headerLogo} /></a>
                <ul className={styles.ulLinks} id="ulLinks">
                    <li><a href="#" className={styles.links}>Home</a></li>
                    <li><a href="https://mapmarketplaces.com/quem-somos/" className={styles.links}>Quem Somos?</a></li>
                    <li><a href="https://mapmarketplaces.com/servicos/" className={styles.links}>Serviços</a></li>
                    <li><a href="https://mapmarketplaces.com/produtos/" className={styles.links}>Produtos</a></li>
                    <li><a href="https://mapmarketplaces.com/parceiros/" className={styles.links}>Parceiros</a></li>
                    <li><a href="https://mapmarketplaces.com/contato/" className={styles.links}>Contato</a></li>
                </ul>
                <img onClick={mobileFlex} className={styles.whiteMenu} src={whiteMenu} alt="white menu" />
            </div>
        </>
    )
}

export default Header