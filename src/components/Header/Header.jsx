import mapLogo from "../../assets/mapLogo.webp"
import styles from "./Header.module.css"

function Header() {

    return (
        <>
        <div className={styles.headerContainer}>
            <a href="/"><img src={mapLogo} alt="logo" className={styles.headerLogo} /></a>
            <ul className={styles.ulLinks}>
                <li><a href="home" className={styles.links}>Home</a></li>
                <li><a href="quem somos" className={styles.links}>Quem Somos?</a></li>
                <li><a href="serviços" className={styles.links}>Serviços</a></li>
                <li><a href="produtos" className={styles.links}>Produtos</a></li>
                <li><a href="parceiros" className={styles.links}>Parceiros</a></li>
                <li><a href="contato" className={styles.links}>Contato</a></li>
            </ul>
        </div>
        </>
    )
}

export default Header