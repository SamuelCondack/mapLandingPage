import mapLogo from "../../assets/mapLogo.webp"
import styles from "./Header.module.css"

function Header() {

    return (
        <>
            <div className={styles.headerContainer}>
                <a href="/"><img src={mapLogo} alt="logo" className={styles.headerLogo} /></a>
                <ul className={styles.ulLinks}>
                    <li><a href="" className={styles.links}>Home</a></li>
                    <li><a href="" className={styles.links}>Quem Somos?</a></li>
                    <li><a href="" className={styles.links}>Serviços</a></li>
                    <li><a href="" className={styles.links}>Produtos</a></li>
                    <li><a href="" className={styles.links}>Parceiros</a></li>
                    <li><a href="" className={styles.links}>Contato</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header